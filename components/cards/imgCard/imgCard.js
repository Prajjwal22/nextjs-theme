import Link from 'next/link'
import React from 'react'
import { getDate } from '../../../utils/utils'
import styles from "../imgCard/imgCard.module.css"

export default function ImgCard({posts}) {
    const featuredImage = posts._embedded['wp:featuredmedia'][0].source_url
    // console.log(posts._embedded['wp:featuredmedia'][0].source_url)
    return (
        <div className={styles.ImgCard}>
            <div className='featImg'>
            <Link href={`/posts/${posts.slug}`}><a><img className="imgHover" src={featuredImage} alt={posts.title.rendered} /></a></Link>
            </div>
            <div>
                    {/* <span className='meta tag'>{posts}</span> */}
                    <Link href={`/posts/${posts.slug}`}><a><h2 className='largeTitle' dangerouslySetInnerHTML={{ __html:posts.title.rendered}}></h2></a></Link>
                    <div className='meta dateMeta'>
                        <time className='pubDate'>
                            {getDate(posts.modified)}
                        </time>
                        <span className='metaSeperator'>
                        </span>
                        <span className='readTime'>
                            5 Mins Read
                        </span>
                    </div>
                    <div
                className="postContent"
                dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}
              ></div>                    
              <div className='readMore'>
                        <span><Link href={`/posts/${posts.slug}`}><a>Read More</a></Link></span>
                    </div>
            </div>
        </div>
    )
}

