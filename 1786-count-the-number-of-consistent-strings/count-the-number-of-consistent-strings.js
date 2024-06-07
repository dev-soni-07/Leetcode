/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
            if (!allowed.includes(char)) {
                isConsistent = false;
                break;
            }
        }
        if(isConsistent){
            result += 1;
        }
    }
    return result;
};