import React from "react";
import styles from "./header.module.css";
import Search from "./search.jsx";
import { ImYoutube } from "react-icons/im";

const Header = (props) => {
    const onSearch = (detail) => {
        props.handleSearch(detail);
    };
    return (
        <div className={styles.header}>
            <div className={styles.brand}>
                <span className={styles.icon}>
                    <ImYoutube size='50px' />
                </span>
                <span className={styles.name}>Youtube</span>
            </div>
            <Search className={styles.searchbar} handleSearch={onSearch} />
        </div>
    );
};

export default Header;
