import Link from "next/link";
import styles from "../card/card.module.css";

export default function Card({post}) {
    // console.log(post.slug)
  const featuredImage = post._embedded['wp:featuredmedia'][0].source_url
  return (
    <div className={styles.Card}>
      <div className="featImg">
      <Link href={`/posts/${post.slug}`}><a><img className="imgHover" src={featuredImage} alt={post.title.rendered}
        /></a></Link>
      </div>
      <div>
        <h2 className="medTitle" dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h2>
      </div>
    </div>
  );
}
