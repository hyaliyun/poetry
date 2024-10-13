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
            {'老三字經'}
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
    <div className={styles.verse}>曰仁義，禮智信，此五常，不容紊。</div>
    <div className={styles.verse}>稻粱菽，麥黍稷，此六谷，人所食。</div>
    <div className={styles.verse}>馬牛羊，雞犬豕，此六畜，人所飼。</div>
    <div className={styles.verse}>曰喜怒，曰哀懼，愛惡欲，七情具。</div>
    <div className={styles.verse}>匏土革，木石金，與絲竹，乃八音。</div>
    <div className={styles.verse}>高曾祖，父而身，身而子，子而孫。</div>
    <div className={styles.verse}>自子孫，至玄曾，乃九族，人之倫。</div>
    <div className={styles.verse}>父子恩，夫婦從，兄則友，弟則恭。</div>
    <div className={styles.verse}>長幼序，友與朋，君則敬，臣則忠。</div>
    <div className={styles.verse}>此十義，人所同。</div>
    <div className={styles.verse}>凡訓蒙，須講究，祥訓詁，明句讀。</div>
    <div className={styles.verse}>為學者，必有初，小學終，至四書。</div>
    <div className={styles.verse}>論語者，二十篇，群弟子，記善言。</div>
    <div className={styles.verse}>孟子者，七篇止，講道德，說仁義。</div>
    <div className={styles.verse}>作中庸，子思筆，中不偏，庸不易。</div>
    <div className={styles.verse}>作大學，乃曾子，自脩齊，至平治。</div>
    <div className={styles.verse}>孝經通，四書熟，如六經，始可讀。</div>
    <div className={styles.verse}>詩書易，禮春秋，號六經，當講求。</div>
    <div className={styles.verse}>有連山，有歸藏，有周易，三易祥。</div>
    <div className={styles.verse}>有典謨，有訓誥，有誓命，書之奧。</div>
    <div className={styles.verse}>我周公，作周禮，著六官，存治體。</div>
    <div className={styles.verse}>大小戴，註禮記，述聖言，禮樂備。</div>
    <div className={styles.verse}>曰國風，曰雅頌，號四詩，當諷詠。</div>
    <div className={styles.verse}>詩既亡，春秋作，寓褒貶，別善惡。</div>
    <div className={styles.verse}>三傳者，有公羊，有左氏，有谷梁。</div>
    <div className={styles.verse}>經既明，方讀子，撮其要，記其事。</div>
    <div className={styles.verse}>五子者，有荀揚，文中子，及老莊。</div>
    <div className={styles.verse}>經子通，讀諸史，考世系，知終始。</div>
    <div className={styles.verse}>自羲農，至黃帝，號三皇，居上世。</div>
    <div className={styles.verse}>唐有虞，號二帝，相揖遜，稱盛世。</div>
    <div className={styles.verse}>夏有禹，商有湯，周文武，稱三王。</div>
    <div className={styles.verse}>夏傳子，家天下，四百載，遷夏社。</div>
    <div className={styles.verse}>湯伐夏，國號商，六百載，至紂亡。</div>
    <div className={styles.verse}>周武王，始誅紂，八百載，最長久。</div>
    <div className={styles.verse}>周撤東，王綱墜，逞幹戈，尚遊說。</div>
    <div className={styles.verse}>始春秋，終戰國，五霸強，七雄出。</div>
    <div className={styles.verse}>嬴秦氏，始兼並，傳二世，楚漢爭。</div>
    <div className={styles.verse}>高祖興，漢業建，至孝平，王莽篡。</div>
    <div className={styles.verse}>光武興，為東漢，四百年，終於獻。</div>
    <div className={styles.verse}>魏蜀吳，爭漢鼎，號三國，迄兩晉。</div>
    <div className={styles.verse}>宋齊繼，梁陳承，為南朝，都金陵。</div>
    <div className={styles.verse}>北元魏，分東西，宇文周，與高齊。</div>
    <div className={styles.verse}>迨至隋，一土宇，不再傳，失統緒。</div>
    <div className={styles.verse}>唐高祖，起義師，除隋亂，創國基。</div>
    <div className={styles.verse}>二十傳，三百載，梁滅之，國乃改。</div>
    <div className={styles.verse}>梁唐晉，及漢周，稱五代，皆有由。</div>
    <div className={styles.verse}>炎宋興，受周禪，十八傳，南北混。</div>
    <div className={styles.verse}>遼與金，皆稱帝，元滅金，絕宋世。</div>
    <div className={styles.verse}>蒞中國，兼戎狄，九十年，國祚廢。</div>
    <div className={styles.verse}>太祖興，國大明，號洪武，都金陵。</div>
    <div className={styles.verse}>迨成祖，遷燕京，十七世，至崇禎。</div>
    <div className={styles.verse}>權閹肆，寇如林，至李闖，神器焚。</div>
    <div className={styles.verse}>清太祖，膺景命，靖四方，克大定。</div>
    <div className={styles.verse}>廿一史，全在茲，載治亂，知興衰。</div>
    <div className={styles.verse}>讀史者，考實錄，通古今，若親目。</div>
    <div className={styles.verse}>口而誦，心而惟，朝於斯，夕於斯。</div>
    <div className={styles.verse}>昔仲尼，師項橐，古聖賢，尚勤學。</div>
    <div className={styles.verse}>趙中令，讀魯論，彼既仕，學且勤。</div>
    <div className={styles.verse}>披蒲編，削竹簡，彼無書，且知勉。</div>
    <div className={styles.verse}>頭懸梁，錐刺股，彼不教，自勤苦。</div>
    <div className={styles.verse}>如囊螢，如映雪，家雖貧，學不輟。</div>
    <div className={styles.verse}>如負薪，如掛角，身雖勞，猶苦卓。</div>
    <div className={styles.verse}>蘇老泉，二十七，始發奮，讀書籍。</div>
    <div className={styles.verse}>彼既老，猶悔遲，爾小生，宜早思。</div>
    <div className={styles.verse}>若梁灝，八十二，對大廷，魁多士。</div>
    <div className={styles.verse}>彼既成，眾稱異，爾小生，宜立誌。</div>
    <div className={styles.verse}>瑩八歲，能詠詩，泌七歲，能賦碁。</div>
    <div className={styles.verse}>彼穎悟，人稱奇，爾幼學，當效之。</div>
    <div className={styles.verse}>蔡文姬，能辨琴，謝道韞，能詠吟。</div>
    <div className={styles.verse}>彼女子，且聰敏，爾男子，當自警。</div>
    <div className={styles.verse}>唐劉晏，方七歲，舉神童，作正字。</div>
    <div className={styles.verse}>彼雖幼，身已仕，爾幼學，勉而致。</div>
    <div className={styles.verse}>有為者，亦若是。</div>
    <div className={styles.verse}>犬守夜，雞司晨，茍不學，曷為人？</div>
    <div className={styles.verse}>蠶吐絲，蜂釀蜜，人不學，不如物。</div>
    <div className={styles.verse}>幼而學，壯而行，上致君，下澤民。</div>
    <div className={styles.verse}>揚名聲，顯父母，光於前，裕於後。</div>
    <div className={styles.verse}>人遺子，金滿籯，我教子，惟一經。</div>
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
