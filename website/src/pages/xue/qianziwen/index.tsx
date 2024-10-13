import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TopBanner() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="https://www.543x.com"
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{ newVersion: announcedVersion }}>
            {'千字文'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

function App() {

  return (
  <div className={styles.qian}>
  <div className={styles.author}>作者：周興嗣</div>
  <div className={styles.content}>
    <div className={styles.verse}>天地玄黃</div>
    <div className={styles.verse}>宇宙洪荒</div>
    <div className={styles.verse}>日月盈昃</div>
    <div className={styles.verse}>辰宿列張</div>
    <div className={styles.verse}>寒來暑往</div>
    <div className={styles.verse}>秋收冬藏</div>
    <div className={styles.verse}>閏餘成歲</div>
    <div className={styles.verse}>律呂調陽</div>
    <div className={styles.verse}>雲騰致雨</div>
    <div className={styles.verse}>露結為霜</div>
    <div className={styles.verse}>金生麗水</div>
    <div className={styles.verse}>玉出崐岡</div>
    <div className={styles.verse}>劍號巨闕</div>
    <div className={styles.verse}>珠稱夜光</div>
    <div className={styles.verse}>果珍李柰</div>
    <div className={styles.verse}>菜重芥姜</div>
    <div className={styles.verse}>踐土會盟</div>
    <div className={styles.verse}>何遵約法</div>
    <div className={styles.verse}>韓弊煩刑</div>
    <div className={styles.verse}>起翦頗牧</div>
    <div className={styles.verse}>用軍最精</div>
    <div className={styles.verse}>宣威沙漠</div>
    <div className={styles.verse}>馳譽丹青</div>
    <div className={styles.verse}>九州禹跡</div>
    <div className={styles.verse}>百郡秦並</div>
    <div className={styles.verse}>嶽宗恆岱</div>
    <div className={styles.verse}>禪主云亭</div>
    <div className={styles.verse}>雁門紫塞</div>
    <div className={styles.verse}>雞田赤城</div>
    <div className={styles.verse}>昆池碣石</div>
    <div className={styles.verse}>鉅野洞庭</div>
    <div className={styles.verse}>曠遠綿邈</div>
    <div className={styles.verse}>巖岫杳冥</div>
    <div className={styles.verse}>治本於農</div>
    <div className={styles.verse}>務茲稼穡</div>
    <div className={styles.verse}>俶載南畝</div>
    <div className={styles.verse}>我藝黍稷</div>
    <div className={styles.verse}>稅熟貢新</div>
    <div className={styles.verse}>勸賞黜陟</div>
    <div className={styles.verse}>孟軻敦素</div>
    <div className={styles.verse}>史魚秉直</div>
    <div className={styles.verse}>庶幾中庸</div>
    <div className={styles.verse}>勞謙謹敕</div>
    <div className={styles.verse}>聆音察理</div>
    <div className={styles.verse}>鑒貌辨色</div>
    <div className={styles.verse}>貽厥嘉猷</div>
    <div className={styles.verse}>勉其祗植</div>
    <div className={styles.verse}>省躬譏誡</div>
    <div className={styles.verse}>寵增抗極</div>
    <div className={styles.verse}>殆辱近恥</div>
    <div className={styles.verse}>林臯幸即</div>
    <div className={styles.verse}>兩疏見機</div>
    <div className={styles.verse}>解徂誰逼</div>
    <div className={styles.verse}>索居閑處</div>
    <div className={styles.verse}>沈默寂寥</div>
    <div className={styles.verse}>求古尋論</div>
    <div className={styles.verse}>散慮逍遙</div>
    <div className={styles.verse}>欣奏累遣</div>
    <div className={styles.verse}>慼謝歡招</div>
    <div className={styles.verse}>渠荷的歷</div>
    <div className={styles.verse}>園莽抽條</div>
    <div className={styles.verse}>枇杷晚翠</div>
    <div className={styles.verse}>梧桐早雕</div>
    <div className={styles.verse}>陳根委翳</div>
    <div className={styles.verse}>落葉飄搖</div>
    <div className={styles.verse}>遊鹍獨運</div>
    <div className={styles.verse}>淩摩絳霄</div>
    <div className={styles.verse}>耽讀玩市</div>
    <div className={styles.verse}>寓目囊箱</div>
    <div className={styles.verse}>易輶攸畏</div>
    <div className={styles.verse}>屬耳垣墻</div>
    <div className={styles.verse}>具膳餐飯</div>
    <div className={styles.verse}>適口充腸</div>
    <div className={styles.verse}>飽飫烹宰</div>
    <div className={styles.verse}>饑厭糟糠</div>
    <div className={styles.verse}>親戚故舊</div>
    <div className={styles.verse}>老少異糧</div>
    <div className={styles.verse}>妾禦績紡</div>
    <div className={styles.verse}>侍巾帷房</div>
    <div className={styles.verse}>紈扇圓潔</div>
    <div className={styles.verse}>銀燭煒煌</div>
    <div className={styles.verse}>晝眠夕寐</div>
    <div className={styles.verse}>藍筍象床</div>
    <div className={styles.verse}>弦歌酒宴</div>
    <div className={styles.verse}>接杯舉觴</div>
    <div className={styles.verse}>矯手頓足</div>
    <div className={styles.verse}>悅豫且康</div>
    <div className={styles.verse}>嫡後嗣續</div>
    <div className={styles.verse}>祭祀烝嘗</div>
    <div className={styles.verse}>稽顙再拜</div>
    <div className={styles.verse}>悚懼恐惶</div>
    <div className={styles.verse}>箋牒簡要</div>
    <div className={styles.verse}>顧答審詳</div>
    <div className={styles.verse}>骸垢想浴</div>
    <div className={styles.verse}>執熱願涼</div>
    <div className={styles.verse}>驢騾犢特</div>
    <div className={styles.verse}>駭躍超驤</div>
    <div className={styles.verse}>誅斬賊盜</div>
    <div className={styles.verse}>捕獲叛亡</div>
    <div className={styles.verse}>布射僚丸</div>
    <div className={styles.verse}>嵇琴阮嘯</div>
    <div className={styles.verse}>恬筆倫紙</div>
    <div className={styles.verse}>鈞巧任釣</div>
    <div className={styles.verse}>釋紛利俗</div>
    <div className={styles.verse}>竝皆佳妙</div>
    <div className={styles.verse}>毛施淑姿</div>
    <div className={styles.verse}>工顰妍笑</div>
    <div className={styles.verse}>年矢每催</div>
    <div className={styles.verse}>曦暉朗曜</div>
    <div className={styles.verse}>璇璣懸斡</div>
    <div className={styles.verse}>晦魄環照</div>
    <div className={styles.verse}>指薪修祜</div>
    <div className={styles.verse}>永綏吉劭</div>
    <div className={styles.verse}>矩步引領</div>
    <div className={styles.verse}>俯仰廊廟</div>
    <div className={styles.verse}>束帶矜莊</div>
    <div className={styles.verse}>徘徊瞻眺</div>
    <div className={styles.verse}>孤陋寡聞</div>
    <div className={styles.verse}>愚蒙等誚</div>
    <div className={styles.verse}>謂語助者</div>
    <div className={styles.verse}>焉哉乎也</div>
    <div className={styles.verse}>果珍李柰</div>
    <div className={styles.verse}>菜重芥姜</div>
    <div className={styles.verse}>海鹹河淡</div>
    <div className={styles.verse}>鱗潛羽翔</div>
    <div className={styles.verse}>龍師火帝</div>
    <div className={styles.verse}>鳥官人皇</div>
    <div className={styles.verse}>始制文字</div>
    <div className={styles.verse}>乃服衣裳</div>
    <div className={styles.verse}>推位讓國</div>
    <div className={styles.verse}>有虞陶唐</div>
    <div className={styles.verse}>吊民伐罪</div>
    <div className={styles.verse}>周發殷湯</div>
    <div className={styles.verse}>愚蒙等誚</div>
    <div className={styles.verse}>謂語助者</div>
    <div className={styles.verse}>焉哉乎也</div>
  </div>
  </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <App />
        </div>
      </main>
    </Layout>
  );
}
