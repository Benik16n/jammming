import React from "react";
import PlaylistObject from "../PlaylistObject/PlaylistObject";
import styles from "./PlaylistList.module.css";
const PlaylistList = ({ playlistList }) => {
  return (
    <div className={styles.playlistList}>
      <h2>Saved Playlists</h2>
      <div className={styles.playlistContainer}>
        {playlistList.map((element, index) => {
          return <PlaylistObject key={index} savedPlaylist={element} />;
        })}
      </div>
    </div>
  );
};
export default PlaylistList;
