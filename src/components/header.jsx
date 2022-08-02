import React from "react";
import styles from "./header.module.css";
import Search from "./search.jsx";
import { ImYoutube } from "react-icons/im";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.brand}>
                <span className={styles.icon}>
                    <ImYoutube size='70px' />
                </span>
                <span className={styles.name}>Youtube</span>
            </div>
            <Search className={styles.searchbar} />
        </div>
    );
};

export default Header;
