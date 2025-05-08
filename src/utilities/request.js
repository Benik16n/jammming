/* const fetchGetSongs = (searchQuery) => {
  return [
    { title: "Lose Yourself" },
    { title: "Without Me" },
    { title: "The Real Slim Shady" },
    { title: "Not Afraid" },
    { title: "Love the Way You Lie" },
    { title: "Mockingbird" },
    { title: "Rap God" },
    { title: "Stan" },
    { title: "Cleanin' Out My Closet" },
    { title: "When I'm Gone" },
  ];
};  */
const fetchGetSongs = async (searchQuery) => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${encodeURIComponent(
    searchQuery
  )}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchGetSongs;
