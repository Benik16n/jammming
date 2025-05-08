import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./Playlist.module.css"; // CSS Module import

const Playlist = ({ playlist, setPlaylist, setSongs, setPlaylistList }) => {
  const [playlistName, setPlaylistName] = useState("");
  const handleChange = ({ target }) => {
    setPlaylistName(target.value);
  };

  const handleRemove = (track) => {
    const newPlaylist = playlist.filter((item) => item.id !== track.id);
    setPlaylist(newPlaylist);
    setSongs((prev) => [track, ...prev]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const SavedPlaylist = { name: playlistName, songList: playlist };
    setPlaylistList((prev) => [...prev, SavedPlaylist]);
  };

  return (
    <div className={styles.mainLayout}>
      <h2 className={styles.title}>Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <input
            className={styles.formInput}
            value={playlistName}
            onChange={handleChange}
            required
            placeholder="Enter the name of the playlist"
          />
          <button className={styles.saveButton} type="submit">
            Save Playlist
          </button>
        </div>
        {playlist.map((song, index) => (
          <Track key={index} song={song} onRemove={handleRemove} />
        ))}
      </form>
    </div>
  );
};

export default Playlist;
