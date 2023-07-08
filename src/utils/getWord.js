function getWord(n) {
  const url = `${import.meta.env.VITE_API_URL.toString()}${n.toString()}?format=json`
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  // const word = axios.get(url).then(res => res.data.word); // Axios version
  const word = fetch(url, {
    headers: headers,
    method: 'GET'
  }).then(res => res.json()).then(el => el.word);
  return word;
}

export { getWord };