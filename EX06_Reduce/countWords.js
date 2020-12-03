function countWords(inputWords) {
    return inputWords.reduce((obj, inputWord) => {
        if(!obj[inputWord]) {
            obj[inputWord] = 0;
        }
        obj[inputWord]++;
        return obj;
    }, {});
}

module.exports = countWords
