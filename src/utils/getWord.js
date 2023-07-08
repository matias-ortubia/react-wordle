function getWord(n) {
  const url = import.meta.env.VITE_API_URL.toString() + n.toString() + "?format=json";
  // const word = axios.get(url).then(res => res.data.word); // Axios version
  const word = fetch(url).then(res => res.json()).then(el => el.word);
  return word;
}

export { getWord };