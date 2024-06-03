/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let one = "";
    let two = "";

    for(w of word1){
        one += w;
    }
    for(w of word2){
        two += w;
    }

    return one === two;
};