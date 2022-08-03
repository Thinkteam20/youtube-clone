import React from "react";
import styles from "./videos.module.css";
import Video from "./video";

const Videos = (props) => {
    // console.log(props.data[0]);
    const videos = props.data;
    return (
        <div className={styles.container}>
            <Video className={styles.gridItem} data={videos} />
        </div>
    );
};

export default Videos;

/*
 <div className={styles.container}>
            <div className={styles.gridItem}>
                <Video items={props.items} />
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
*/
