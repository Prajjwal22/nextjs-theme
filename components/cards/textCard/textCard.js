import styles from "../textCard/textCard.module.css";


export default function TextCard() {
  return (
    <div className={styles.textCard}>
      <span className='meta tag'>Gadgets</span>
      <h3 className='medTitle'>Summer Drift and Beach Bomber</h3>
      <div className='meta dateMeta'>
        <time className='pubDate'>
          Aug 14 2018
        </time>
        <span className='metaSeperator'>
        </span>
        <span className='readTime'>
          5 Mins Read
        </span>
      </div>
    </div>
  );
}
