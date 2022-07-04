import React from 'react'
import styles from "../imgCard/imgCard.module.css"

export default function ImgCard() {
    return (
        <div className={styles.ImgCard}>
            <div className='featImg'>
                <img className="imgHover" src="https://cdn.gamerjournalist.com/primary/2022/06/UyN5XtM3L2L23vD38GKX7f-1.jpg" alt="card title" />
            </div>
            <div>
                    <span className='meta tag'>Gaming</span>
                    <h2 className='largeTitle'>Best Games to Play in 2022 (Xbox)</h2>
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
                    <div className='postContent'>
                        <p>2022 is shaping up to be a big year for Xbox players as there are new impressive updates and expansions coming to previous…</p>
                    </div>
                    <div className='readMore'>
                        <span>Read More</span>
                    </div>
            </div>
        </div>
    )
}