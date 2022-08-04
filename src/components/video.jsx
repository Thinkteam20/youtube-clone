import React, { useState } from "react";
import styles from "./video.module.css";

const Video = (props) => {
    const thumbnail = props.data;

    function makeid(length) {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    return (
        <>
            {thumbnail.map((item) => {
                return (
                    <div key={makeid(100)} className={styles.videoCard}>
                        <div className={styles.image}>
                            <a
                                href={`https://www.youtube.com/watch?v=${item.id}`}
                            >
                                <img
                                    src={item.snippet.thumbnails.medium.url}
                                    alt=''
                                />
                            </a>
                        </div>
                        <div className={styles.rightBox}>
                            <p className='title'>{item.snippet.title}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Video;
