import React, { useState } from 'react';
import PersonCard from './PersonCard';
import peopleData from './baijiaxing.json';
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
            {'百家姓'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}
function TopBanners() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>

          <Translate
            id="homepage.banner.launch.newVersion"
            values={{ newVersion: announcedVersion }}>
            {'"趙錢孫李，周吳鄭王。","馮陳褚衛，蔣沈韓楊。","朱秦尤許，何呂施張。","孔曹嚴華，金魏陶姜。","戚謝鄒喻，柏水竇章。","雲蘇潘葛，奚範彭郎。","魯韋昌馬，苗鳳花方。","俞任袁柳，酆鮑史唐。","費廉岑薛，雷賀倪湯。","滕殷羅畢，郝鄔安常。","樂于時傅，皮卞齊康。","伍余元蔔，顧孟平黃。","和穆蕭尹，姚邵湛汪。","祁毛禹狄，米貝明臧。","計伏成戴，談宋茅龐。","熊紀舒屈，項祝董梁。","杜阮藍閔，席季麻強。","賈路婁危，江童顏郭。","梅盛林刁，鐘徐邱駱。","高夏蔡田，樊胡淩霍。","虞萬支柯，昝管盧莫。","經房裘繆，幹解應宗。","丁宣賁鄧，郁單杭洪。","包諸左石，崔吉鈕龔。","程嵇邢滑，裴陸榮翁。","荀羊於惠，甄麴家封。","芮羿儲靳，汲邴糜松。","井段富巫，烏焦巴弓。","牧隗山谷，車侯宓蓬。", "全郗班仰，秋仲伊宮。","寧仇欒暴，甘鈄厲戎。","祖武符劉，景詹束龍。","葉幸司韶，郜黎薊薄。","印宿白懷，蒲邰從鄂。","索鹹籍賴，卓藺屠蒙。","池喬陰鬱，胥能蒼雙。","聞莘黨翟，譚貢勞逄。","姬申扶堵，冉宰酈雍。","郤璩桑桂，濮牛壽通。","邊扈燕冀，郟浦尚農。","溫別莊晏，柴瞿閻充。","慕連茹習，宦艾魚容。","向古易慎，戈廖庾終。","暨居衡步，都耿滿弘。","匡國文寇，廣祿闕東。","歐殳沃利，蔚越夔隆。","師鞏厙聶，晁勾敖融。","冷訾辛闞，那簡饒空。","曾毋沙乜，養鞠須豐。","巢關蒯相，查后荊紅。","遊竺權逯，蓋益桓公。","萬俟司馬，上官歐陽。","夏侯諸葛，聞人東方。","赫連皇甫，尉遲公羊。","澹台公冶，宗政濮陽。","淳于單于，太叔申屠。","公孫仲孫，軒轅令狐。","鐘離宇文，長孫慕容。","鮮于閭丘，司徒司空。","亓官司寇，仉督子車。","顓孫端木，巫馬公西。","漆雕樂正，壤駟公良。","拓跋夾谷，宰父谷梁。","晉楚閆法，汝鄢塗欽。","段幹百裏，東郭南門。","呼延歸海，羊舌微生。","嶽帥緱亢，況后有琴。","梁丘左丘，東門西門。","商牟佘佴，伯賞南宮。","墨哈譙笪，年愛陽佟。","第五言福，百家姓終。"'}
          </Translate>

      </div>
    </div>
  );
}
function App() {
  const [visibleCount, setVisibleCount] = useState(24); // Show 3 cards initially

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12); // Load 3 more cards
  };

  return (
    <div className={styles.cardContainer}>
      {peopleData.slice(0, visibleCount).map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}

      {visibleCount < peopleData.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          查看更多
        </button>
      )}
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <TopBanners />
        <div className={styles.section}>
          <App />
        </div>
      </main>
    </Layout>
  );
}
