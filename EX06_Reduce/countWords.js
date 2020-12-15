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

// function countWords(arr) {
//     return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//     }, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords
