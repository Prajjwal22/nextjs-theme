import Link from "next/link";
import { getDate } from "../../../utils/utils";
import styles from "../textCard/textCard.module.css";


export default function TextCard({post}) {
  console.log(post._embedded['wp:term'][1][0].name)
  return (
    <div className={styles.textCard}>
      <span className='meta tag'><Link href={`/posts/${post.slug}`}>{post._embedded['wp:term'][0][0].name}</Link></span>
      <h3 className='medTitle'><Link href={`/posts/${post.slug}`}>{post.title.rendered}</Link></h3>
      <div className='meta dateMeta'>
        <time className='pubDate'>
        {getDate(post.modified)}
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
