import React from "react";
import styles from "./video.module.css";

const Video = (props) => {
    return (
        <div className={styles.videoCard}>
            <div>
                <img src='' alt='' />
            </div>
            <div className={styles.rightBox}>
                <p className='title'>Dune Official</p>
                <p className='name'>Warner Bros.Picture</p>
            </div>
        </div>
    );
};

export default Video;
