async function getWord() {
  fetch(
    "https://wordsapiv1.p.mashape.com/words?random=true",
    {
      method: "GET",
      headers: {
        "X-Mashape-Key": "required",
        //"Content-Type": "application/x-www-form-urlencoded",
        //Accept: "application/json",
      },
    }
  )
  .then(response => response.json())
}

export { getWord };
