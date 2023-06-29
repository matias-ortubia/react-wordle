function isAnswer(flags) {
    let length = flags.length;
    for(let i = 0; i < length; i++) {
        if(flags[i] != "green") {
            return false;
        }
    }
    console.log("true");
    return true;
}

export { isAnswer };