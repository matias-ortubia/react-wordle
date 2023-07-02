async function getWord(n) {
  const url = import.meta.env.VITE_API_URL.toString() + n.toString();
  let response = await fetch(url).then(response => response.json());
  let word = response[0];
  while(word.length != n) {
    response = await fetch(url).then(response => response.json());
    word = response[0];
  }
  return word;
}

export { getWord };
