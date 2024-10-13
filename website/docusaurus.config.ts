/**
 * Copyright (c) 543x, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'path';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import configTabs from './src/remark/configTabs';
import RsdoctorPlugin from './src/plugins/rsdoctor/RsdoctorPlugin';

import VersionsArchived from './versionsArchived.json';
import {
  dogfoodingPluginInstances,
  dogfoodingThemeInstances,
  dogfoodingRedirects,
  dogfoodingTransformFrontMatter,
} from './_dogfooding/dogfooding.config';

import ConfigLocalized from './docusaurus.config.localized.json';

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';
import type {Config, DocusaurusConfig} from '@docusaurus/types';

import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';



const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(
  0,
  5,
);

function isPrerelease(version: string) {
  return (
    version.includes('-') ||
    version.includes('alpha') ||
    version.includes('beta') ||
    version.includes('rc')
  );
}



// This probably only makes sense for the alpha/beta/rc phase, temporary



const crashTest = process.env.DOCUSAURUS_CRASH_TEST === 'true';


const isSlower = process.env.DOCUSAURUS_SLOWER === 'true';
if (isSlower) {
  console.log('🐢 Using slower poetry build');
}

const router = process.env
  .DOCUSAURUS_ROUTER as DocusaurusConfig['future']['experimental_router'];

const isDev = process.env.NODE_ENV === 'development';

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const baseUrl = process.env.BASE_URL ?? '/';

// Special deployment for staging locales until they get enough translations
// https://app.netlify.com/sites/docusaurus-i18n-staging
// https://docusaurus-i18n-staging.netlify.app/
const isI18nStaging = process.env.I18N_STAGING === 'true';

const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;

/*
const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
*/

const defaultLocale = 'en';
function getLocalizedConfigValue(key: keyof typeof ConfigLocalized) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}



export default async function createConfigAsync() {
  return {
    title: '天涯',
    tagline: '天涯',
    organizationName: '543x',
    projectName: '天涯',
    baseUrl,
    baseUrlIssueBanner: true,
    url: 'https://www.474x.com',


    trailingSlash: isDeployPreview,
    stylesheets: [
      {
        href: '/katex/katex.min.css',
        type: 'text/css',
      },
    ],
    markdown: {
      format: 'detect',
      mermaid: true,
      mdx1Compat: {
        // comments: false,
      },
      remarkRehypeOptions: {
        footnoteLabel: getLocalizedConfigValue('remarkRehypeOptions_footnotes'),
      },
      parseFrontMatter: async (params) => {
        const result = await params.defaultParseFrontMatter(params);
        return {
          ...result,
          frontMatter: dogfoodingTransformFrontMatter(result.frontMatter),
        };
      },
      preprocessor: ({filePath, fileContent}) => {
        let result = fileContent;

        // This fixes Crowdin bug altering MDX comments on i18n sites...
        // https://github.com/543x
        result = result.replaceAll('{/_', '{/*');
        result = result.replaceAll('_/}', '*/}');

        const showDevLink = false;

        if (isDev && showDevLink) {
          const isPartial = path.basename(filePath).startsWith('_');
          if (!isPartial) {
            // "vscode://file/${projectPath}${filePath}:${line}:${column}",
            // "webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",
            const vscodeLink = `vscode://file/${filePath}`;
            const webstormLink = `webstorm://open?file=${filePath}`;
            const intellijLink = `idea://open?file=${filePath}`;
            result = `${result}\n\n---\n\n**DEV**: open this file in [VSCode](<${vscodeLink}>) | [WebStorm](<${webstormLink}>) | [IntelliJ](<${intellijLink}>)\n`;
          }
        }

        return result;
      },
    },
    onBrokenLinks: 'ignore', 
    onBrokenAnchors: 'ignore', 
    onBrokenMarkdownLinks: 'ignore', 
    favicon: 'img/docusaurus.svg',

    staticDirectories: [
      'static',
      path.join(__dirname, '_dogfooding/_asset-tests'),
      // Adding a non-existent static directory. If user deleted `static`
      // without specifying `staticDirectories: []`, build should still work
      path.join(__dirname, '_dogfooding/non-existent'),
    ],
    themes: ['live-codeblock', ...dogfoodingThemeInstances],
    plugins: [
      RsdoctorPlugin,

      [
        'content-docs',
        {
          id: 'community',
          path: 'community',
          routeBasePath: 'community',
          editUrl: ({ pagesPath }) => 
            `https://github.com/hyaliyun/blob/main/website/`,
          remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: './sidebarsCommunity.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        } satisfies DocsOptions,
      ],
      [
        'content-docs',
        {
          id: 'google',
          path: 'google',
          routeBasePath: 'google',
          editUrl: ({ pagesPath }) => 
            `https://github.com/hyaliyun/blob/main/website/`,
          remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        } satisfies DocsOptions,
      ],
      [
        'content-docs',
        {
          id: 'learn',
          path: 'learn',
          routeBasePath: 'learn',
          editUrl: ({ docPath }) => 
            `https://github.com/hyaliyun/poetry/edit/main/website/src/pages/${docPath}`,

          remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        } satisfies DocsOptions,
      ],
      
      [
        'client-redirects',
        {
          fromExtensions: ['html'],
          createRedirects(routePath) {
            // Redirect to /docs from /docs/introduction (now docs root doc)
            if (routePath === '/docs' || routePath === '/docs/') {
              return [`${routePath}/introduction`];
            }
            return [];
          },
          redirects: [
            {
              from: ['/docs/support', '/docs/next/support'],
              to: '/community/support',
            },      

            ...dogfoodingRedirects,
          ],
        } satisfies ClientRedirectsOptions,
      ],
      [
        'ideal-image',

        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        } satisfies IdealImageOptions,
      ],
      [
        'pwa',
        {
          // debug: isDeployPreview,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          // swRegister: false,
          swCustom: require.resolve('./src/sw.js'), // TODO make it possible to use relative path
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: 'img/docusaurus.svg',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: 'manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#000',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: 'img/docusaurus.svg',
            },
            {
              tagName: 'link',
              rel: 'mask-icon',
              href: 'img/docusaurus.svg',
              color: 'rgb(62, 204, 94)',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: 'img/docusaurus.svg',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#000',
            },
          ],
        },
      ],
      '@docusaurus/theme-mermaid',
      './src/plugins/featureRequests/FeatureRequestsPlugin.js',
      ...dogfoodingPluginInstances,
    ],
    presets: [

      [
        'classic',
        {
          debug: true, // force debug plugin usage
          
          pages: {
            remarkPlugins: [npm2yarn],
            editUrl: ({ pagesPath }) => 
              `https://github.com/hyaliyun/blob/main/website/`,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          } satisfies PageOptions,
          


          theme: {
            customCss: [
              './src/css/custom.css',
              // relative paths are relative to site dir
              './_dogfooding/dogfooding.css',
            ],
          },
          gtag: !(isDeployPreview || isBranchDeploy)
            ? {
                trackingID: ['G-E5CR2Q1NRE'],
              }
            : undefined,
          sitemap: {
            // Note: /tests/docs already has noIndex: true
            ignorePatterns: ['/tests/{blog,pages}/**'],
            lastmod: 'date',
            priority: null,
            changefreq: null,
          },

        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: `announcementBar}`,
        // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/543x/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
        content: `🎉️ <b><a target="_blank" href="https://www.543x.com">www.543x.com</a> is out!</b> 🥳️`,
      },
      prism: {
        additionalLanguages: [
          'java',
          'latex',
          'haskell',
          'matlab',
          'PHp',
          'powershell',
          'bash',
          'diff',
          'json',
          'scss',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        theme: PrismLight,
        darkTheme: PrismDark,
      },
      image: 'img/docusaurus-social-card.jpg',
      // metadata: [{name: 'twitter:card', content: 'summary'}],
      algolia: {
        appId: 'X1Z85QJPUV',
        apiKey: 'bf7211c161e8205da2f933a02534105a',
        indexName: 'docusaurus-2',
        replaceSearchResultPathname:
          isDev || isDeployPreview
            ? {
                from: /^\/docs\/next/g.source,
                to: '/docs',
              }
            : undefined,
      },
      navbar: {
        hideOnScroll: true,
        title: '天涯',
        logo: {
          alt: '',
          src: 'img/docusaurus.svg',
          srcDark: 'img/docusaurus_keytar.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            label: '宋词',
            position: 'left',
            activeBaseRegex: `/song/`,
            items: [
              { label: '宋词三百首', to: '/song/0' },
              { label: '宋词1', to: '/song/1' },
              { label: '宋词2', to: '/song/2' },
              { label: '宋词3', to: '/song/3' },
              { label: '宋词4', to: '/song/4' }, 
              { label: '宋词5', to: '/song/5' },  
              { label: '宋词6', to: '/song/6' },         
              { label: '宋词7', to: '/song/7' },  
              { label: '宋词8', to: '/song/8' },  
              { label: '宋词9', to: '/song/9' },  
              { label: '宋词10', to: '/song/10' },  
              { label: '宋词11', to: '/song/11' },  
              { label: '宋词12', to: '/song/12' },  
              { label: '宋词13', to: '/song/13' },  
              { label: '宋词14', to: '/song/14' },  
              { label: '宋词15', to: '/song/15' },  
              { label: '宋词16', to: '/song/16' },  
              { label: '宋词17', to: '/song/17' },  
              { label: '宋词18', to: '/song/18' },  
              { label: '宋词19', to: '/song/19' },  
              { label: '宋词20', to: '/song/20' },  
              { label: '宋词21', to: '/song/21' },  
              { label: '宋词22', to: '/song/22' },  
              { label: '宋词23', to: '/song/23' },  
              { label: '宋词24', to: '/song/24' },  
              { label: '宋词25', to: '/song/25' },  
              { label: '宋词26', to: '/song/26' },  
              { label: '宋词27', to: '/song/27' },
              { label: '宋词28', to: '/song/28' },
              { label: '宋词29', to: '/song/29' },
              { label: '宋词30', to: '/song/30' },
              { label: '宋词31', to: '/song/31' },
              { label: '宋词32', to: '/song/32' },
              { label: '宋词33', to: '/song/33' },
              { label: '宋词34', to: '/song/34' },
              { label: '宋词35', to: '/song/35' },
              { label: '宋词36', to: '/song/36' },
              { label: '宋词37', to: '/song/37' },
              { label: '宋词38', to: '/song/38' },
              { label: '宋词39', to: '/song/39' },
              { label: '宋词40', to: '/song/40' },
              { label: '宋词41', to: '/song/41' },
              { label: '宋词42', to: '/song/42' },
              { label: '宋词43', to: '/song/43' },
              { label: '宋词44', to: '/song/44' },
              { label: '宋词45', to: '/song/45' },
              { label: '宋词46', to: '/song/46' },
              { label: '宋词47', to: '/song/47' },
              { label: '宋词48', to: '/song/48' },
              { label: '宋词49', to: '/song/49' },
              { label: '宋词50', to: '/song/50' },
              { label: '宋词51', to: '/song/51' },
              { label: '宋词52', to: '/song/52' },
              { label: '宋词53', to: '/song/53' },
              { label: '宋词54', to: '/song/54' },
              { label: '宋词55', to: '/song/55' },
              { label: '宋词56', to: '/song/56' },
              { label: '宋词57', to: '/song/57' },
              { label: '宋词58', to: '/song/58' },
              { label: '宋词59', to: '/song/59' },
              { label: '宋词60', to: '/song/60' },
              { label: '宋词61', to: '/song/61' },
              { label: '宋词62', to: '/song/62' },
              { label: '宋词63', to: '/song/63' },
              { label: '宋词64', to: '/song/64' },
              { label: '宋词65', to: '/song/65' },
              { label: '宋词66', to: '/song/66' },
              { label: '宋词67', to: '/song/67' },
              { label: '宋词68', to: '/song/68' },
              { label: '宋词69', to: '/song/69' },
              { label: '宋词70', to: '/song/70' },
              { label: '宋词71', to: '/song/71' },
              { label: '宋词72', to: '/song/72' },
              { label: '宋词73', to: '/song/73' },
              { label: '宋词74', to: '/song/74' },
              { label: '宋词75', to: '/song/75' },
              { label: '宋词76', to: '/song/76' },
              { label: '宋词77', to: '/song/77' },
              { label: '宋词78', to: '/song/78' },
              { label: '宋词79', to: '/song/79' },
              { label: '宋词80', to: '/song/80' },
              { label: '宋词81', to: '/song/81' },
              { label: '宋词82', to: '/song/82' },
              { label: '宋词83', to: '/song/83' },
              { label: '宋词84', to: '/song/84' },
              { label: '宋词85', to: '/song/85' },
              { label: '宋词86', to: '/song/86' },
              { label: '宋词87', to: '/song/87' },
              { label: '宋词88', to: '/song/88' },
              { label: '宋词89', to: '/song/89' },
              { label: '宋词90', to: '/song/90' },
              { label: '宋词91', to: '/song/91' },
              { label: '宋词92', to: '/song/92' },
              { label: '宋词93', to: '/song/93' },
              { label: '宋词94', to: '/song/94' },
              { label: '宋词95', to: '/song/95' },
              { label: '宋词96', to: '/song/96' },
              { label: '宋词97', to: '/song/97' },
              { label: '宋词98', to: '/song/98' },
              { label: '宋词99', to: '/song/99' },
              { label: '宋词100', to: '/song/100' },
              { label: '宋词101', to: '/song/101' },
              { label: '宋词102', to: '/song/102' },
              { label: '宋词103', to: '/song/103' },
              { label: '宋词104', to: '/song/104' }, 
              { label: '宋词105', to: '/song/105' },  
              { label: '宋词106', to: '/song/106' },         
              { label: '宋词107', to: '/song/107' },  
              { label: '宋词108', to: '/song/108' },  
              { label: '宋词109', to: '/song/109' },  
              { label: '宋词110', to: '/song/110' },  
              { label: '宋词111', to: '/song/111' },  
              { label: '宋词112', to: '/song/112' },  
              { label: '宋词113', to: '/song/113' },  
              { label: '宋词114', to: '/song/114' },  
              { label: '宋词115', to: '/song/115' },  
              { label: '宋词116', to: '/song/116' },  
              { label: '宋词117', to: '/song/117' },  
              { label: '宋词118', to: '/song/118' },  
              { label: '宋词119', to: '/song/119' },  
              { label: '宋词120', to: '/song/120' },  
              { label: '宋词121', to: '/song/121' },  
              { label: '宋词122', to: '/song/122' },  
              { label: '宋词123', to: '/song/123' },  
              { label: '宋词124', to: '/song/124' },  
              { label: '宋词125', to: '/song/125' },  
              { label: '宋词126', to: '/song/126' },  
              { label: '宋词127', to: '/song/127' },
              { label: '宋词128', to: '/song/128' },
              { label: '宋词129', to: '/song/129' },
              { label: '宋词130', to: '/song/130' },
              { label: '宋词131', to: '/song/131' },
              { label: '宋词132', to: '/song/132' },
              { label: '宋词133', to: '/song/133' },
              { label: '宋词134', to: '/song/134' },
              { label: '宋词135', to: '/song/135' },
              { label: '宋词136', to: '/song/136' },
              { label: '宋词137', to: '/song/137' },
              { label: '宋词138', to: '/song/138' },
              { label: '宋词139', to: '/song/139' },
              { label: '宋词140', to: '/song/140' },
              { label: '宋词141', to: '/song/141' },
              { label: '宋词142', to: '/song/142' },
              { label: '宋词143', to: '/song/143' },
              { label: '宋词144', to: '/song/144' },
              { label: '宋词145', to: '/song/145' },
              { label: '宋词146', to: '/song/146' },
              { label: '宋词147', to: '/song/147' },
              { label: '宋词148', to: '/song/148' },
              { label: '宋词149', to: '/song/149' },
              { label: '宋词150', to: '/song/150' },
              { label: '宋词151', to: '/song/151' },
              { label: '宋词152', to: '/song/152' },
              { label: '宋词153', to: '/song/153' },
              { label: '宋词154', to: '/song/154' },
              { label: '宋词155', to: '/song/155' },
              { label: '宋词156', to: '/song/156' },
              { label: '宋词157', to: '/song/157' },
              { label: '宋词158', to: '/song/158' },
              { label: '宋词159', to: '/song/159' },
              { label: '宋词160', to: '/song/160' },
              { label: '宋词161', to: '/song/161' },
              { label: '宋词162', to: '/song/162' },
              { label: '宋词163', to: '/song/163' },
              { label: '宋词164', to: '/song/164' },
              { label: '宋词165', to: '/song/165' },
              { label: '宋词166', to: '/song/166' },
              { label: '宋词167', to: '/song/167' },
              { label: '宋词168', to: '/song/168' },
              { label: '宋词169', to: '/song/169' },
              { label: '宋词170', to: '/song/170' },
              { label: '宋词171', to: '/song/171' },
              { label: '宋词172', to: '/song/172' },
              { label: '宋词173', to: '/song/173' },
              { label: '宋词174', to: '/song/174' },
              { label: '宋词175', to: '/song/175' },
              { label: '宋词176', to: '/song/176' },
              { label: '宋词177', to: '/song/177' },
              { label: '宋词178', to: '/song/178' },
              { label: '宋词179', to: '/song/179' },
              { label: '宋词180', to: '/song/180' },
              { label: '宋词181', to: '/song/181' },
              { label: '宋词182', to: '/song/182' },
              { label: '宋词183', to: '/song/183' },
              { label: '宋词184', to: '/song/184' },
              { label: '宋词185', to: '/song/185' },
              { label: '宋词186', to: '/song/186' },
              { label: '宋词187', to: '/song/187' },
              { label: '宋词188', to: '/song/188' },
              { label: '宋词189', to: '/song/189' },
              { label: '宋词190', to: '/song/190' },
              { label: '宋词191', to: '/song/191' },
              { label: '宋词192', to: '/song/192' },
              { label: '宋词193', to: '/song/193' },
              { label: '宋词194', to: '/song/194' },
              { label: '宋词195', to: '/song/195' },
              { label: '宋词196', to: '/song/196' },
              { label: '宋词197', to: '/song/197' },
              { label: '宋词198', to: '/song/198' },
              { label: '宋词199', to: '/song/199' },
              { label: '宋词200', to: '/song/200' },
              { label: '宋词201', to: '/song/201' },
              { label: '宋词202', to: '/song/202' },
              { label: '宋词203', to: '/song/203' },
              { label: '宋词204', to: '/song/204' }, 
              { label: '宋词205', to: '/song/205' },  
              { label: '宋词206', to: '/song/206' },         
              { label: '宋词207', to: '/song/207' },  
              { label: '宋词208', to: '/song/208' },  
              { label: '宋词209', to: '/song/209' },  
              { label: '宋词210', to: '/song/210' },  
              { label: '宋词211', to: '/song/211' },  
              { label: '宋词212', to: '/song/212' },  
              { label: '宋词213', to: '/song/213' },  
              { label: '宋词214', to: '/song/214' },  
              { label: '宋词215', to: '/song/215' },  
              { label: '宋词216', to: '/song/216' },  
              { label: '宋词217', to: '/song/217' },  
              { label: '宋词218', to: '/song/218' },  
              { label: '宋词219', to: '/song/219' },  
              { label: '宋词220', to: '/song/220' },  
              { label: '宋词221', to: '/song/221' },  
              { label: '宋词222', to: '/song/222' },  
              { label: '宋词223', to: '/song/223' },  
              { label: '宋词224', to: '/song/224' },  
              { label: '宋词225', to: '/song/225' },  
              { label: '宋词226', to: '/song/226' },  
              { label: '宋词227', to: '/song/227' },
              { label: '宋词228', to: '/song/228' },
              { label: '宋词229', to: '/song/229' },
              { label: '宋词230', to: '/song/230' },
              { label: '宋词231', to: '/song/231' },
              { label: '宋词232', to: '/song/232' },
              { label: '宋词233', to: '/song/233' },
              { label: '宋词234', to: '/song/234' },
              { label: '宋词235', to: '/song/235' },
              { label: '宋词236', to: '/song/236' },
              { label: '宋词237', to: '/song/237' },
              { label: '宋词238', to: '/song/238' },
              { label: '宋词239', to: '/song/239' },
              { label: '宋词240', to: '/song/240' },
              { label: '宋词241', to: '/song/241' },
              { label: '宋词242', to: '/song/242' },
              { label: '宋词243', to: '/song/243' },
              { label: '宋词244', to: '/song/244' },
              { label: '宋词245', to: '/song/245' },
              { label: '宋词246', to: '/song/246' },
              { label: '宋词247', to: '/song/247' },
              { label: '宋词248', to: '/song/248' },
              { label: '宋词249', to: '/song/249' },
              { label: '宋词250', to: '/song/250' },
              { label: '宋词251', to: '/song/251' },
              { label: '宋词252', to: '/song/252' },
              { label: '宋词253', to: '/song/253' },
              { label: '宋词254', to: '/song/254' },
              { label: '宋词255', to: '/song/255' },
            ]
          },
          {to: 'showcase', label: '展示', position: 'left'},
          {
            label: '蒙学',
            position: 'left',
            activeBaseRegex: `/xue/`,
            items: [
              { label: '百家姓', to: '/xue/baijiaxing' },
              { label: '弟子規', to: '/xue/dizigui' },
              { label: '古文觀止', to: '/xue/guwenguanzhi' },
              { label: '千家詩', to: '/xue/qianjiashi' },
              { label: '千字文', to: '/xue/qianziwen' }, 
              { label: '三字經', to: '/xue/sanzijing-new' },  
              { label: '老三字經', to: '/xue/sanzijing-traditional' },         
              { label: '聲律啟蒙', to: '/xue/shenglvqimeng' },  
              { label: '唐詩三百首', to: '/xue/tangshisanbaishou' },  
              { label: '文字蒙求', to: '/xue/wenzimengqiu' },  
              { label: '幼學瓊林', to: '/xue/youxueqionglin' },  
              { label: '增廣賢文', to: '/xue/zengguangxianwen' },  
              { label: '朱子家訓', to: '/xue/zhuzijiaxun' },  
            ]
          },
          {
            label: '唐诗',
            position: 'left',
            activeBaseRegex: `/tang/`,
            items: [
              { label: '唐诗三百首', to: '/tang/0' },
              { label: '水墨唐诗', to: '/tang/shuimotangshi' },
              { label: '幽梦影', to: '/tang/youmengying' },
              { label: '唐诗1', to: '/tang/1' },
              { label: '唐诗2', to: '/tang/2' },
              { label: '唐诗3', to: '/tang/3' }, 
              { label: '唐诗4', to: '/tang/4' },  
              { label: '唐诗5', to: '/tang/5' },         
              { label: '唐诗6', to: '/tang/6' },  
              { label: '唐诗7', to: '/tang/7' },  
              { label: '唐诗8', to: '/tang/8' },  
              { label: '唐诗9', to: '/tang/9' },  
              { label: '唐诗10', to: '/tang/10' },  
              { label: '唐诗11', to: '/tang/11' },  
              { label: '唐诗12', to: '/tang/12' },  
              { label: '唐诗13', to: '/tang/13' },  
              { label: '唐诗14', to: '/tang/14' },  
              { label: '唐诗15', to: '/tang/15' },  
              { label: '唐诗16', to: '/tang/16' },  
              { label: '唐诗17', to: '/tang/17' },  
              { label: '唐诗18', to: '/tang/18' },  
              { label: '唐诗19', to: '/tang/19' },  
              { label: '唐诗20', to: '/tang/20' },  
              { label: '唐诗21', to: '/tang/21' },  
              { label: '唐诗22', to: '/tang/22' },  
              { label: '唐诗23', to: '/tang/23' },  
              { label: '唐诗24', to: '/tang/24' },  
              { label: '唐诗25', to: '/tang/25' },  
              { label: '唐诗26', to: '/tang/26' },  
              { label: '唐诗27', to: '/tang/27' },  
              { label: '唐诗28', to: '/tang/28' },  
              { label: '唐诗29', to: '/tang/29' },  
              { label: '唐诗30', to: '/tang/30' },  
              { label: '唐诗31', to: '/tang/31' },  
              { label: '唐诗32', to: '/tang/32' },  
              { label: '唐诗33', to: '/tang/33' },  
              { label: '唐诗34', to: '/tang/34' },  
              { label: '唐诗35', to: '/tang/35' },  
              { label: '唐诗36', to: '/tang/36' },  
              { label: '唐诗37', to: '/tang/37' },  
              { label: '唐诗38', to: '/tang/38' },  
              { label: '唐诗39', to: '/tang/39' },  
              { label: '唐诗40', to: '/tang/40' },  
              { label: '唐诗41', to: '/tang/41' },  
              { label: '唐诗42', to: '/tang/42' },  
              { label: '唐诗43', to: '/tang/43' },  
              { label: '唐诗44', to: '/tang/44' },  
              { label: '唐诗45', to: '/tang/45' },  
              { label: '唐诗46', to: '/tang/46' },  
              { label: '唐诗47', to: '/tang/47' },  
              { label: '唐诗48', to: '/tang/48' },  
              { label: '唐诗49', to: '/tang/49' },  
              { label: '唐诗50', to: '/tang/50' },  
              { label: '唐诗51', to: '/tang/51' },  
              { label: '唐诗52', to: '/tang/52' },  
              { label: '唐诗53', to: '/tang/53' },  
              { label: '唐诗54', to: '/tang/54' },  
              { label: '唐诗55', to: '/tang/55' },  
              { label: '唐诗56', to: '/tang/56' },  
              { label: '唐诗57', to: '/tang/57' },  
              { label: '唐诗58', to: '/tang/58' },  
            ]
          },
          {
            label: '五代',
            position: 'left',
            activeBaseRegex: `/wudai/`,
            items: [
              { label: '南唐', to: '/wudai/nantang' },
              { label: '花间集1', to: '/wudai/huajianji1' },
              { label: '花间集2', to: '/wudai/huajianji2' },
              { label: '花间集3', to: '/wudai/huajianji3' },
              { label: '花间集4', to: '/wudai/huajianji4' }, 
              { label: '花间集5', to: '/wudai/huajianji5' },  
              { label: '花间集6', to: '/wudai/huajianji6' },         
              { label: '花间集7', to: '/wudai/huajianji7' },  
              { label: '花间集8', to: '/wudai/huajianji8' },  
              { label: '花间集9', to: '/wudai/huajianji9' },  
              { label: '花间集10', to: '/wudai/huajianji10' },  
            ]
          },
          {
            label: '人物',
            position: 'left',
            activeBaseRegex: ``,
            items: [
              {to: 'Map', label: '人物'},
              {to: 'mengzi', label: '孟子'},
              {to: 'caocao', label: '曹操'}, 
              {to: '/xue/nalan', label: '纳兰'},
            ]
          },

          {to: 'chuci', label: '楚辞', position: 'left'},
          {to: 'lunyu', label: '论语', position: 'left'},

          {to: 'shijing', label: '诗经', position: 'left'},
          {to: 'yuanqu', label: '元曲', position: 'left'},

          {to: 'chengyu', label: '成语', position: 'left'},
          {
            to: '/community/support',
            label: '网站',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          {
            to: '/learn/support',
            label: '学习',
            position: 'left',
            activeBaseRegex: `/learn/`,
          },
          {
            to: '/google/support',
            label: '文档',
            position: 'left',
            activeBaseRegex: `/google/`,
          },
          // This item links to a draft doc: only displayed in dev
          isDev && {to: '/__docusaurus/debug', label: 'Debug'},
          // Custom item for dogfooding: only displayed in /tests/ routes
          {
            type: 'custom-dogfood-navbar-item',
            content: '😉',
          },
          // Right
          {to: 'swap', label: '交换', position: 'right'},
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://www.543x.com',
                label: 'btc',
              },
            ],
          },
          {
            href: 'https://github.com/hyaliyun/poetry',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
          // TODO fix type
          .filter(Boolean) as NonNullable<
          Preset.ThemeConfig['navbar']
        >['items'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'Get Started',
                href: 'https://ai.543x.com',
              },
              {
                label: 'Learn React',
                href: 'https://r.543x.com',
              },
              {
                label: 'Quick Start',
                href: 'https://e.543x.com',
              },
              {
                label: 'Logo by',
                href: 'https://www.z2.pw',
              },
              {
                label: 'web3',
                href: 'https://www.494x.com',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'you',
                href: 'https://c.543x.com',
              },
              {
                label: 'GitHub',
                href: 'https://www.252x.com/',
              },
              {
                label: 'Pump',
                href: 'https://d.543x.com',
              },
              {
                label: 'Swap',
                href: 'https://s.543x.com',
              },
              {
                label: 'GoogleDocs',
                href: 'https://a.494x.com',
              },
            ],
          },
          {
            title: 'Team',
            items: [
              {
                label: 'GitHub',
                href: 'https://b.543x.com',
              },
              {
                label: 'Conduct',
                href: 'https://btc.543x.com',
              },
              {
                label: 'the Team',
                href: 'https://g.543x.com',
              },
              {
                label: 'Contributors',
                href: 'https://f.543x.com',
              },
              {
                label: 'gongkao',
                href: 'https://www.64ii.com',
              },
            ],
          },
          {
            title: 'React',
            items: [
              {
                label: 'Blog',
                href: 'https://d.543x.com',
              },
              {
                label: 'React Native',
                href: 'https://doge.543x.com',
              },
              {
                label: 'PEPE',
                href: 'https://pepe.543x.com',
              },
              {
                label: 'Privacy',
                href: 'https://no.543x.com',
              },
              {
                label: 'Type',
                href: 'https://82ii.com',
              },
            ],
          },
          {
            title: '天涯',
            items: [
              {
                label: 'Overview',
                href: 'https://b.252x.com/',
              },
              {
                label: 'Electron',
                href: 'https://c.252x.com/',
              },
              {
                label: 'jamstack',
                href: 'https://d.252x.com/',
              },
              {
                label: 'Vite',
                href: 'https://a.252x.com/',
              },
              {
                label: '天涯',
                href: 'https://www.82oo.com',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          src: '/img/head-logo.png',
          href: 'https://www.543x.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} 天涯`,
      },
    } satisfies Preset.ThemeConfig,
  } satisfies Config;
}
