import Link from "next/link";
import { getDate } from "../../../utils/utils";
import styles from "../textCard/textCard.module.css";


export default function TextCard({post}) {
  // console.log(post._embedded['wp:term'][1][0].name)

  const catSlug = post._embedded['wp:term'][0][0].slug

  return (
    <div className={styles.textCard}>
      <span className='meta tag'><Link href={`/category/${catSlug}`}>{post._embedded['wp:term'][0][0].name}</Link></span>
      <Link href={`/posts/${post.slug}`}><a><h3 className='medTitle'dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h3></a></Link>
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
