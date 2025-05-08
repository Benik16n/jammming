import React, { useState, useEffect } from "react";
import Tracklist from "./Components/Tracklist/Tracklist";
import Playlist from "./Components/Playlist/Playlist";
import PlaylistList from "./Components/PlaylistList/PlaylistList";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css";
import fetchGetSongs from "./utilities/request";

function App() {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isPlaylistLoaded, setIsPlaylistLoaded] = useState(true);
  const [playlistList, setPlaylistList] = useState([]);

  const loadCreatePlaylist = () => {
    setIsPlaylistLoaded(true);
  };

  const loadSavedPlaylists = () => {
    setIsPlaylistLoaded(false);
  };

  useEffect(() => {
    if (!search) return;
    const fetchResult = async () => {
      try {
        const result = await fetchGetSongs(search);
        setSongs(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResult();
  }, [search]);

  return (
    <div className="app-container">
      <header>
        <h1 className="header">Jammming</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </header>

      <section className="controls">
        <button className="button" onClick={loadCreatePlaylist}>
          Create Playlist
        </button>
        <button className="button" onClick={loadSavedPlaylists}>
          Saved Playlists
        </button>
      </section>

      <main className="layout">
        <Tracklist
          setSongs={setSongs}
          setPlaylist={setPlaylist}
          songs={songs}
        />
        {isPlaylistLoaded ? (
          <Playlist
            setSongs={setSongs}
            setPlaylist={setPlaylist}
            playlist={playlist}
            setPlaylistList={setPlaylistList}
          />
        ) : (
          <PlaylistList playlistList={playlistList} />
        )}
      </main>
    </div>
  );
}
export default App;
