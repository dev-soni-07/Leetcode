/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const isAnagram = (word1, word2) => {
        return word1.split('').sort().join('') === word2.split('').sort().join('');
    };

    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (i === 0 || !isAnagram(words[i], words[i - 1])) {
            result.push(words[i]);
        }
    }

    return result;  
};