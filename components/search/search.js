import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [SearchModal, setSearchModal] = useState(false);

  return (
    <div>
      <div className={styles.Search}>
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => {
            setSearchModal(true);
          }}
        />
      </div>

      {SearchModal && (
        <div className={styles.searchOverlay}>
          <FontAwesomeIcon className={styles.searchClose}
            icon={faClose}
            onClick={() => setSearchModal(false)}
          />
          <input placeholder="Search here"  className={styles.searchBox} />
        </div>
      )}
    </div>
  );
};

export default Search;
