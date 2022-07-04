import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [SearchModal, setSearchModal] = useState(false);

  const handleClick = () => {
    setSearchModal(!SearchModal)
    if(!SearchModal){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
  return (
    <div>
      <div className={styles.Search}>
        <FontAwesomeIcon
          icon={faSearch}
          onClick={handleClick}
        />
      </div>

      {SearchModal && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <FontAwesomeIcon
              className={styles.searchClose} color="black"
              icon={faClose}
              onClick={handleClick}
            />
            <form method="get" action="/">
            <input type="search" placeholder="Search here..." className={styles.searchBox} />
            <button type="submit" style={{visibility:"hidden"}}>Submit</button>
            <p className="message"> Type above and press <em>Enter</em> to search. Press <em>Esc</em> to cancel.</p>
            </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
