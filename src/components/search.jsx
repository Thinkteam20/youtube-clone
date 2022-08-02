import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
    return (
        <form className={styles.searchForm}>
            <input
                type='text'
                placeholder='Search..'
                className={styles.searchInput}
            />
        </form>
    );
};

export default Search;
