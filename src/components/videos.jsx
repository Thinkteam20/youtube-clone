import React from "react";
import styles from "./videos.module.css";
import Video from "./video";

const Videos = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.gridItem}>
                <Video />
            </div>
            <div className={styles.gridItem}>
                <Video />
            </div>
            <div className={styles.gridItem}>
                <Video />
            </div>
            <div className={styles.gridItem}>
                <Video />
            </div>
        </div>
    );
};

export default Videos;
