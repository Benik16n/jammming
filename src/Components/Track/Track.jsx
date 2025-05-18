import React from "react";
import styles from "./Track.module.css";
const Track = ({ song, onAdd, onRemove }) => {
  return (
    <div className={styles.trackLayout}>
      <div className={styles.trackInfo}>
        <h3 className={styles.mainText}>{song.title}</h3>
        <p className={styles.subText}>{song.artist.name}</p>
      </div>
      {onAdd && (
        <button className={styles.addStyle} onClick={() => onAdd(song)}>
          +
        </button>
      )}
      {onRemove && (
        <button className={styles.removeStyle} onClick={() => onRemove(song)}>
          -
        </button>
      )}
      <audio src={song.preview} controls className={styles.audioPlayer} />
    </div>
  );
};
export default Track;
