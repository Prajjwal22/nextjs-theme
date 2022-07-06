import React from 'react'
import styles from "../imgCard/imgCard.module.css"

export default function ImgCard({title, image, excerpt, category, pubDate, readTime}) {
    return (
        <div className={styles.ImgCard}>
            <div className='featImg'>
                <img className="imgHover" src={image} alt="card title" />
            </div>
            <div>
                    <span className='meta tag'>{category}</span>
                    <h2 className='largeTitle' dangerouslySetInnerHTML={{ __html:title}}></h2>
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
                    <div
                className="postContent"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              ></div>                    <div className='readMore'>
                        <span>Read More</span>
                    </div>
            </div>
        </div>
    )
}

