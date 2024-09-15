/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) {
        return false;
    }

    let patternToWord = new Map();
    let wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        let p = pattern[i];
        let word = words[i];

        if (patternToWord.has(p)) {
            if (patternToWord.get(p) !== word) {
                return false;
            }
        } else {
            patternToWord.set(p, word);
        }

        if (wordToPattern.has(word)) {
            if (wordToPattern.get(word) !== p) {
                return false;
            }
        } else {
            wordToPattern.set(word, p);
        }
    }

    return true;
};