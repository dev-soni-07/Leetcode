/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    for(let i=0; i<words.length; i++){
        for(word of words[i]){
            if(x === word){
                result.push(i);
                break;
            }
        }
    }
    return result;
};