/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let hasVowel = false;
    let hasConsonant = false;

    for (let char of word) {
        if (!(/[a-zA-Z0-9]/.test(char))) {
            return false;
        }
        if (vowels.has(char)) {
            hasVowel = true;
        } else if (/[a-zA-Z]/.test(char)) {
            hasConsonant = true;
        }
    }

    return hasVowel && hasConsonant;
};