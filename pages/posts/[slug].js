import {
  faFacebookF,
  faPinterestP,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/cards/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Link from "next/link";
import Image from 'next/image';

import { getPost, getSlugs } from "../../utils/wordpress";
import { getDate } from "../../utils/utils";
import { useEffect, useState } from "react";


export default function PostPage({ post }) {
    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url
    const obj=Object.keys(post._embedded['authors'][0].avatar_urls)
    const objValue = Object.values(post._embedded['authors'][0].avatar_urls)
    console.log(post._embedded['authors'][0]?.description)


    useEffect(() => {
        const allText = document.getElementsByClassName("postContent")[0].innerText;
        const wpm = 150;
        const words = allText.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        document.getElementById("time").innerText = time;
        console.log("time" + time)
    }, []);

  return (
    <>
      <Header />
      <div className="singleCover container">
        <div className="featured">
        <img
            src={featuredImage}
            className="imgHover"
            alt={post.title.rendered}
          />
          <div className="featuredOverlay">
            <span className="meta tag">{post._embedded['wp:term'][0][0].name}</span>
            <h1 className="largeTitle">{post.title.rendered}</h1>
            <div className="meta dateMeta">
              <span className="postAuthor">By {post._embedded['authors'][0].name}</span>
              <span className="metaSeperator"></span>
              <time className="pubDate">{getDate(post.modified)}</time>
              <span className="metaSeperator"></span>
              <span className="readTime"><span id="time"></span> Mins Read</span>
              <ul className="postShare">
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      color="white"
                      size="lg"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon color="white" size="lg" icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      color="white"
                      size="lg"
                      icon={faPinterestP}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      color="white"
                      size="lg"
                      icon={faLinkedinIn}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mainArea">
          <div className="socialShare">
            <ul className="postShare">
              <p>Share</p>
              <li>
                <a href="#">
                  <FontAwesomeIcon color="blue" size="lg" icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon color="skyBlue" size="lg" icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon color="red" size="lg" icon={faPinterestP} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon color="blue" size="lg" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
          <div className="mainContent">
            <artlce className="articleBody">
              <div
                className="postContent"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
              <div className="postFooter">
                <div className="footerMeta">
                  <div className="postTags">
                    <a
                      href="https://contentberg.theme-sphere.com/blog/tag/beauty/"
                      rel="tag"
                    >
                      Beauty
                    </a>
                    <a
                      href="https://contentberg.theme-sphere.com/blog/tag/beauty/"
                      rel="tag"
                    >
                      Marketing
                    </a>
                    <a
                      href="https://contentberg.theme-sphere.com/blog/tag/beauty/"
                      rel="tag"
                    >
                      Gadgets
                    </a>
                  </div>
                  <ul className="postShare">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faFacebookF}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faTwitter}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faPinterestP}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faEnvelope}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="authorBox">
                  <img
                    alt=""
                    src={objValue[2]}
                    className="profileImage"
                  />
                  <span className="author">
                    <a
                      href="https://contentberg.theme-sphere.com/blog/author/admin/"
                      title="Posts by James Doe"
                      rel="author"
                    >
                      {post._embedded['authors'][0].name}
                    </a>
                  </span>
                  <p className="authorBio">{post._embedded['authors'][0].description}</p>
                  <ul className="postShare">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faFacebookF}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faTwitter}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faPinterestP}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          color="black"
                          size="lg"
                          icon={faEnvelope}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relatedSection">
                <h4>
                  <span>Related Posts</span>
                </h4>
                <div className="relatedPosts">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </artlce>
          </div>
          <div style={{ position: "sticky", top: 0, height: "fit-content" }}>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
