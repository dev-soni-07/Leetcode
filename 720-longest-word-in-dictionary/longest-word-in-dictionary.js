/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    
    const built = new Set();
    let result = "";
    
    for (let word of words) {
        if (word.length === 1 || built.has(word.slice(0, -1))) {
            built.add(word);
            
            if (word.length > result.length) {
                result = word;
            }
        }
    }
    
    return result;
};