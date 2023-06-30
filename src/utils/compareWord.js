/* 
* Returns a list of flags
* G: the letter is in the right position
* Y: the letter is included in the word but in another position
* -: the letter is not in the word */
function compareWords(inputWord) {
    const answer = "ramon";

    let length = answer.length;
    let flags = ['', '', '', '', ''];
    let result = ['', '', '', '', ''];

    for (let i = 0; i < length; i++) {
        if (inputWord[i] == answer[i]) {
            result[i] = "correct";
        }
    }

    let answerCounter = 0;
    let inputCounter = 0;
    while (inputCounter < length) {
        if (result[inputCounter] == "correct") {
            inputCounter += 1;
            continue;
        }

        answerCounter = 0;
        while (answerCounter < length) {
            if (flags[answerCounter] == "almost" || 
                result[inputCounter] == "almost"|| 
                result[answerCounter] == "correct") {
                
                answerCounter += 1;
                continue;
            }
            if (answer[answerCounter] == inputWord[inputCounter]) {
                flags[answerCounter] = "almost";
                result[inputCounter] = "almost";
                break;
            }
            answerCounter += 1;
        }
        if (result[inputCounter] != "almost") {
            result[inputCounter] = "notInWord";
        }
        inputCounter += 1;
    }
    return result;
}

export { compareWords };