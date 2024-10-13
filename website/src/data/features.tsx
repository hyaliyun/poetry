/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string; 
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
  url: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: '咏柳',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ipstack.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        碧玉妆成一树高，万条垂下绿丝绦。

        不知细叶谁裁出，二月春风似剪刀。
      </Translate>
    ),
    url: 'https://www.96oo.com',
  },
  {
    title: translate({
      message: '静夜思',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/zenserp.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
       床前明月光，疑是地上霜。

       举头望明月，低头思故乡。
      </Translate>
    ),
    url: 'https://www.82oo.com',
  },
  {
    title: translate({
      message: '早发白帝城',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/fixer.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       朝辞白帝彩云间，千里江陵一日还。

两岸猿声啼不住，轻舟已过万重山。
      </Translate>
    ),
    url: 'https://www.81oo.com',
  },
  {
    title: translate({
      message: '黄鹤楼送孟浩然之广陵',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/aviationstack.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
         故人西辞黄鹤楼，烟花三月下扬州。

孤帆远影碧空尽，唯见长江天际流。
      </Translate>
    ),
    url: 'https://www.474x.com',
  },
  {
    title: translate({
      message: '望庐山瀑布',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/number_verification.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
         日照香炉生紫烟，遥看瀑布挂前川。

飞流直下三千尺，疑是银河落九天。
      </Translate>
    ),
    url: 'https://www.64ii.com',
  },
];

export default FEATURES;
