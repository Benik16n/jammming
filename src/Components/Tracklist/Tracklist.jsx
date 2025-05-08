import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";
const Tracklist = ({ setSongs, songs, setPlaylist }) => {
  const handleAdd = (track) => {
    const trackToAdd = songs.find((song) => song.id === track.id);
    setPlaylist((prev) => [...prev, trackToAdd]);
    setSongs((prev) => prev.filter((item) => item.id !== trackToAdd.id));
  };
  return (
    <div className={styles.mainStyle}>
      <h2 className={styles.title}>Tracks</h2>
      {songs.map((song, index) => {
        return <Track onAdd={handleAdd} key={index} song={song} />;
      })}
    </div>
  );
};

export default Tracklist;
