import {
  faFacebookF,
  faPinterestP,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

export default function Posts() {
  return (
    <>
      <Header />
      <div className="singleCover container">
        <div className="featured">
          <img
            src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/shutterstock_1035324535-1170x508.jpg"
            className="imgHover"
          />
          <div className="featuredOverlay">
            <span className="meta tag">Gaming</span>
            <h1 className="largeTitle">Best Games to Play in 2022 (Xbox)</h1>
            <div className="meta dateMeta">
              <span className="postAuthor"> By Matthew Gupta</span>
              <span className="metaSeperator"></span>
              <time className="pubDate">Aug 14 2018</time>
              <span className="metaSeperator"></span>
              <span className="readTime">5 Mins Read</span>
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
                    <FontAwesomeIcon color="white" size="lg" icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mainArea">
          <div className="socialShare"> 
          <ul className="postShare"><p>Share</p>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      color="blue"
                      size="lg"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon color="skyBlue" size="lg" icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      color="red"
                      size="lg"
                      icon={faPinterestP}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon color="blue" size="lg" icon={faLinkedinIn} />
                  </a>
                </li>
              </ul></div>
          <div className="mainContent"></div>
          <div className="sidebar"><Sidebar/></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
