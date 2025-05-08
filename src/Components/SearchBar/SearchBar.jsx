import React from "react";
import styles from "./SearchBar.module.css";
const SearchBar = ({ search, setSearch }) => {
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <div className={styles.layout}>
      <input
        className={styles.input}
        placeholder="Enter a song title"
        value={search}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};
export default SearchBar;
