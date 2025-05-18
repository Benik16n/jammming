import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./PlaylistObject.module.css";
import PlayButton from "../PlayButton/PlayButton";
const PlaylistObject = ({ savedPlaylist }) => {
  const [isShowingTracks, setIsShowingTracks] = useState(false);

  return (
    <div className={styles.PlaylistObject}>
      <h3>{savedPlaylist.name}</h3>

      {!isShowingTracks && (
        <button
          className={styles.expandButton}
          onClick={() => setIsShowingTracks(true)}
        >
          expand
        </button>
      )}

      {isShowingTracks && (
        <>
          {savedPlaylist.songList.map((element, index) => (
            <Track key={index} song={element} />
          ))}
          <button
            className={styles.collapseButton}
            onClick={() => setIsShowingTracks(false)}
          >
            collapse
          </button>
        </>
      )}
      <PlayButton songsToPlay={savedPlaylist} />
    </div>
  );
};

export default PlaylistObject;
