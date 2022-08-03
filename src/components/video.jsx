import React from "react";
import styles from "./video.module.css";
import img1 from "../imgs/testing.png";

const Video = (props) => {
    const thumbnail = props.data;
    return (
        <>
            {thumbnail.map((item) => {
                return (
                    <div key={item.id} className={styles.videoCard}>
                        <div className={styles.image}>
                            <img
                                src={item.snippet.thumbnails.medium.url}
                                alt=''
                            />
                        </div>
                        <div className={styles.rightBox}>
                            <p className='title'>Dune Official</p>
                            <p className='name'>Warner Bros.Picture</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Video;
