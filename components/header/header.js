import {
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useState } from "react";
import styles from "../header/header.module.css";
import Search from "../search/search";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  // const Close = () => {setClick(false);
  //   document.body.style.overflow='none';
  // }

  return (
    <>
      <div style={{ display: "unset" }}>
        <div
          className={click ? "main-container" : ""}
          onClick={() => {
            // setClick(!click);
            // document.body.style.overflow = "none";
          }}
        />
        <nav className={styles.Navbar} onClick={(e) => e.stopPropagation()}>
          <div className={styles.navContainer}>
            <div className={styles.navIcon} onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon icon={faTimes} width={40} />
              ) : (
                <FontAwesomeIcon icon={faBars} width={40} />
              )}
            </div>
            <div className={styles.navLogo}>
              <Link href="/">
                <img
                  src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/logo-1x-1.png"
                  alt="Site"
                />
              </Link>
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
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </div>
              </li>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/posts/posts"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  <Link href="/posts/posts">
                    <a>Posts</a>
                  </Link>
                </div>
              </li>
              <li className={styles.navItem}>
                <div
                  exact
                  to="/posts/category"
                  activeClassName="active"
                  className={styles.navLinks}
                  onClick={click ? handleClick : null}
                >
                  <Link href="/posts/category">
                    <a>Category</a>
                  </Link>
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
            <div className={styles.search}>
              <Search />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
