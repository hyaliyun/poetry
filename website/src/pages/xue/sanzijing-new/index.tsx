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
            {'三字經'}
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
  <div className={styles.author}>作者：王應麟</div>
  <div className={styles.content}>
    <div className={styles.verse}>人之初，性本善，性相近，習相遠。</div>
    <div className={styles.verse}>茍不教，性乃遷，教之道，貴以專。</div>
    <div className={styles.verse}>昔孟母，擇鄰處，子不學，斷機杼。</div>
    <div className={styles.verse}>竇燕山，有義方，教五子，名俱揚。</div>
    <div className={styles.verse}>養不教，父之過，教不嚴，師之惰。</div>
    <div className={styles.verse}>子不學，非所宜，幼不學，老何為？</div>
    <div className={styles.verse}>玉不琢，不成器，人不學，不知義。</div>
    <div className={styles.verse}>為人子，方少時，親師友，習禮儀。</div>
    <div className={styles.verse}>香九齡，能溫席，孝於親，所當執。</div>
    <div className={styles.verse}>融四歲，能讓梨，弟於長，宜先知。</div>
    <div className={styles.verse}>首孝弟，次見聞，知某數，識某文。</div>
    <div className={styles.verse}>一而十，十而百，百而千，千而萬。</div>
    <div className={styles.verse}>三才者，天地人，三光者，日月星。</div>
    <div className={styles.verse}>三綱者，君臣義，父子親，夫婦順。</div>
    <div className={styles.verse}>曰春夏，曰秋冬，此四時，運不窮。</div>
    <div className={styles.verse}>曰南北，曰西東，此四方，應乎中。</div>
    <div className={styles.verse}>曰水火，木金土，此五行，本乎數。</div>
    <div className={styles.verse}>十幹者，甲至癸，十二支，子至亥。</div>
    <div className={styles.verse}>曰黃道，日所躔，曰赤道，當中權。</div>
    <div className={styles.verse}>赤道下，溫暖極，我中華，在東北。</div>
    <div className={styles.verse}>寒燠均，霜露改，右高原，左大海。</div>
    <div className={styles.verse}>曰江河，曰淮濟，此四瀆，水之紀。</div>
    <div className={styles.verse}>曰岱華，嵩恒衡，此五嶽，山之名。</div>
    <div className={styles.verse}>古九州，今改制，稱行省，三十五。</div>
    <div className={styles.verse}>曰士農，曰工商，此四民，國之良。</div>
    <div className={styles.verse}>地所生，有草木，此植物，遍水陸。</div>
    <div className={styles.verse}>有蟲魚，有鳥獸，此動物，能飛走。</div>
    <div className={styles.verse}>稻粱菽，麥黍稷，此六谷，人所食。</div>
    <div className={styles.verse}>馬牛羊，雞犬豕，此六畜，人所飼。</div>
    <div className={styles.verse}>曰喜怒，曰哀懼，愛惡欲，七情具。</div>
    <div className={styles.verse}>曰仁義，禮智信，此五常，不容紊。</div>
    <div className={styles.verse}>青赤黃，及白黑，此五色，目所識。</div>
    <div className={styles.verse}>酸甘甘，及辛鹹，此五味，口所含。</div>
    <div className={styles.verse}>膻焦香，及腥朽，此五臭，鼻所嗅。</div>
    <div className={styles.verse}>宮商角，及徵羽，此五音，耳所取。</div>
    <div className={styles.verse}>匏土革，木石金，與絲竹，乃八音。</div>
    <div className={styles.verse}>曰平上，曰去入，此四聲，宜調葉。</div>
    <div className={styles.verse}>九族者，序宗親，高曾祖，父而身。</div>
    <div className={styles.verse}>身而子，子而孫，自子孫，至曾玄。</div>
    <div className={styles.verse}>五倫者，始夫婦，父子先，君臣後。</div>
    <div className={styles.verse}>次兄弟，及朋友，當順敘，勿違背。</div>
    <div className={styles.verse}>有伯叔，有舅甥，婿婦翁，三黨名。</div>
    <div className={styles.verse}>凡訓蒙，須講究，詳訓故，明句讀。</div>
    <div className={styles.verse}>禮樂射，禦書數，古六藝，今不具。</div>
    <div className={styles.verse}>帷書學，人共遵，既識字，講說文。</div>
    <div className={styles.verse}>有古文，大小篆，隸草繼，不可亂。</div>
    <div className={styles.verse}>若廣學，懼其繁，但略說，能知源。</div>
    <div className={styles.verse}>為學者，必有初，小學終，至四書。</div>
    <div className={styles.verse}>論語者，二十篇，群弟子，記善言。</div>
    <div className={styles.verse}>孟子者，七篇止，辨王載，說仁義。</div>
    <div className={styles.verse}>中庸者，子思筆，中不偏，庸不易。</div>
    <div className={styles.verse}>大學者，乃曾子，自修齊，至治平。</div>
    <div className={styles.verse}>此二篇，在禮記，今單行，至治平。</div>
    <div className={styles.verse}>四書通，孝經熟，如六經，始可讀。</div>
    <div className={styles.verse}>六經者，統儒術，文作周，孔子述。</div>
    <div className={styles.verse}>易詩書，禮春秋，樂經亡，餘可求。</div>
    <div className={styles.verse}>有連山，有歸藏，有周易，三易詳。</div>
    <div className={styles.verse}>有典謨，有訓誥，有誓命，書之奧。</div>
    <div className={styles.verse}>有國風，有雅頌，號四詩，當諷誦。</div>
    <div className={styles.verse}>周禮者，箸六官，儀禮者，十七篇。</div>
    <div className={styles.verse}>大小戴，集禮記，述聖言，禮法備。</div>
    <div className={styles.verse}>王跡息，春秋作，寓褒貶，別善惡。</div>
    <div className={styles.verse}>王傳者，有公羊，有左氏，有谷梁。</div>
    <div className={styles.verse}>爾雅者，善辨言，求經訓，此莫先。</div>
    <div className={styles.verse}>古聖著，先賢傳，註疏備，十三經。</div>
    <div className={styles.verse}>左傳外，有國語，合群經，數十五。</div>
    <div className={styles.verse}>經既明，方讀子，撮其要，記其事。</div>
    <div className={styles.verse}>古九流，多亡佚，取五種，修文質。</div>
    <div className={styles.verse}>五子者，有荀揚，文中子，及老莊。</div>
    <div className={styles.verse}>經子通，讀諸史，考世系，知終始。</div>
    <div className={styles.verse}>自羲農，至黃帝，號三皇，在上世。</div>
    <div className={styles.verse}>堯舜興，禪尊位，號唐虞，為二帝。</div>
    <div className={styles.verse}>夏有禹，商有湯，周文武，稱三王。</div>
    <div className={styles.verse}>夏傳子，家天下，四百載，遷夏社。</div>
    <div className={styles.verse}>湯伐夏，國號商，六百載，至紂亡。</div>
    <div className={styles.verse}>周武王，始誅紂，八百載，最長久。</div>
    <div className={styles.verse}>周共和，始紀年，歷宣幽，遂東遷。</div>
    <div className={styles.verse}>周道衰，王納墜，逞士戈，尚遊說。</div>
    <div className={styles.verse}>始春秋，終戰國，五霸強，七雄出。</div>
    <div className={styles.verse}>蠃秦氏，始兼並，傳二世，楚漢爭。</div>
    <div className={styles.verse}>高祖興，漢業建，至孝平，王莽篡。</div>
    <div className={styles.verse}>先武興，為東漢，四百年，終於獻。</div>
    <div className={styles.verse}>魏蜀吳，爭漢鼎，號三國，迄兩晉。</div>
    <div className={styles.verse}>宋齊繼，梁陳承，為南朝，都金陵。</div>
    <div className={styles.verse}>北元魏，分東西，宇文周，與高齊。</div>
    <div className={styles.verse}>迨至隋，一土宇，不再傳，失統緒。</div>
    <div className={styles.verse}>唐高祖，起義師，除隋亂，創國基。</div>
    <div className={styles.verse}>二十傳，三百載，梁滅之，國乃改。</div>
    <div className={styles.verse}>梁唐晉，及漢周，稱五代，皆有由。</div>
    <div className={styles.verse}>趙宋興，受周祥，十八傳，南北混。</div>
    <div className={styles.verse}>遼興金，皆夷裔，元滅之，絕宋世。</div>
    <div className={styles.verse}>蒞中國，兼戎狄，九十年，返沙磧。</div>
    <div className={styles.verse}>太祖興，稱大明，紀洪武，都金陵。</div>
    <div className={styles.verse}>迨成祖，遷宛平，十六世，至崇禎。</div>
    <div className={styles.verse}>權閹肆，流寇起，自成入，神器毀。</div>
    <div className={styles.verse}>清太祖，興遼東，金之後，受明封。</div>
    <div className={styles.verse}>至世祖，乃大同，十二世，清祚終。</div>
    <div className={styles.verse}>凡正史，廿四部，益以清，成廿五。</div>
    <div className={styles.verse}>史雖繁，讀有次，史記一，漢書二。</div>
    <div className={styles.verse}>後漢三，國誌四，此四史，最精致。</div>
    <div className={styles.verse}>先四史，兼證經，參通鑒，約而精。</div>
    <div className={styles.verse}>歷代事，全在茲，載治亂，知興衰。</div>
    <div className={styles.verse}>讀史者，考實錄，通古今，若親目。</div>
    <div className={styles.verse}>漢賈董，及許鄭，皆經師，能述聖。</div>
    <div className={styles.verse}>宋周程，張朱陸，明王氏，皆道學。</div>
    <div className={styles.verse}>屈原賦，本風人，逮鄒枚，暨卿雲。</div>
    <div className={styles.verse}>韓與柳，並文雄，李若杜，為詩宗。</div>
    <div className={styles.verse}>凡學者，宜兼通，翼聖教，振民風。</div>
    <div className={styles.verse}>口而誦，心而帷，朝於斯，夕於斯。</div>
    <div className={styles.verse}>昔仲尼，師項橐，古聖賢，尚勤學。</div>
    <div className={styles.verse}>趙中令，讀魯論，彼既仕，學且勤。</div>
    <div className={styles.verse}>披薄編，削竹簡，彼無書，且知勉。</div>
    <div className={styles.verse}>頭懸梁，錐刺股，彼不教，自勤苦。</div>
    <div className={styles.verse}>如囊螢，如映雪，家雖貧，學不輟。</div>
    <div className={styles.verse}>如負薪，如掛角，身雖勞，猶苦卓。</div>
    <div className={styles.verse}>蘇明允，二十七，始發憤，讀書籍。</div>
    <div className={styles.verse}>彼既老，猶悔遲，爾小生，宜早思。</div>
    <div className={styles.verse}>若荀卿，年五十，遊稷下，習儒業。</div>
    <div className={styles.verse}>彼既成，眾稱異，爾小生，宜立誌。</div>
    <div className={styles.verse}>瑩八歲，能詠詩，泌七歲，能賦棋。</div>
    <div className={styles.verse}>彼穎悟，人稱奇，爾幼學，當效之。</div>
    <div className={styles.verse}>蔡文姬，能辯琴，謝道韞，能詠吟。</div>
    <div className={styles.verse}>彼女子，且聰敏，爾男子，當自警。</div>
    <div className={styles.verse}>唐劉晏，方七歲，舉神童，作正字。</div>
    <div className={styles.verse}>彼雖幼，身已仕，爾細學，勉而致。</div>
    <div className={styles.verse}>犬守夜，雞司晨，茍不學，曷為人？</div>
    <div className={styles.verse}>蠶吐絲，蜂釀蜜，人不學，不如物。</div>
    <div className={styles.verse}>幼習業，壯致身，上匡國，下利民。</div>
    <div className={styles.verse}>揚名聲，顯父母，光於前，裕於後。</div>
    <div className={styles.verse}>人遺子，金滿籯，我教子，帷一經。</div>
    <div className={styles.verse}>勤有功，戲無益，戒之哉，宜勉力。</div>
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
