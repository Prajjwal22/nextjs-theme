import {
  faFacebook,
  faGoogle,
  faInstagram,
  faMixcloud,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../footer/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerWrap container">
        <ul className={styles.socialIcons}>
          <li>
            <a href="#">
              <FontAwesomeIcon color="white" size="lg" icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon color="white" size="lg" icon={faTwitter} />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon color="white" size="lg" icon={faInstagram} />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon color="white" size="lg" icon={faTwitch} />
            </a>{" "}
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon color="white" size="lg" icon={faGoogle} />
            </a>{" "}
          </li>
        </ul>
        <ul className={styles.footerMenu}>
          <li>Home</li>
          <li>About</li>
          <li>Gadgets</li>
          <li>Learning</li>
          <li>Groceries</li>
        </ul>
        <p className={styles.copyright}>
          © {new Date().getFullYear()}{" "}
          <strong>Contentberg ReactJS Theme.</strong> All Rights Reserved.
        </p>
        <div className={styles.goTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} /> Top
        </div>
      </div>
    </footer>
  );
}
