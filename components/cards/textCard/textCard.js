import Link from "next/link";
import { getDate } from "../../../utils/utils";
import styles from "../textCard/textCard.module.css";


export default function TextCard({post, category}) {
  const catSlug = post._embedded['wp:term'][0][0].slug
  console.log()

  return (
    <div className={styles.textCard}>
      <Link href={`/category/${catSlug}`}><a><span className='meta tag' dangerouslySetInnerHTML={{__html:post._embedded['wp:term'][0][0].name}}></span></a></Link>
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
