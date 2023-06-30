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

  fetch(
    API_URL,
  )

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}



export { getWord };
