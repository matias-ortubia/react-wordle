function isAnswer(flags) {
    let length = flags.length;
    for(let i = 0; i < length; i++) {
        if(flags[i] != "correct") {
            return false;
        }
    }
    return true;
}

export { isAnswer };