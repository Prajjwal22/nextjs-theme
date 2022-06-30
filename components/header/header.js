import {
  faBars,
  faCancel,
  faCross,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../header/header.module.css";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div style={{ display: "unset" }}>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className={styles.Navbar} onClick={(e) => e.stopPropagation()}>
          <div className={styles.navContainer}>
            <div className={styles.navLogo}>
              <img
                src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/logo-1x-1.png"
                alt="Site"
              />
            </div>
            <ul className={click ? "navMenu active" : "navMenu"}>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  Home
                </div>
              </li>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/about"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  About
                </div>
              </li>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/blog"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  Blog
                </div>
              </li>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/contact"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </div>
              </li>
            </ul>
            <div className={styles.navIcon} onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon icon={faTimes} width={40} />
              ) : (
                <FontAwesomeIcon icon={faBars} width={40} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
