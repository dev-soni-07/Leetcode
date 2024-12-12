/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let seenVowels = new Set();
        for (let j = i; j < word.length; j++) {
            if (vowels.has(word[j])) {
                seenVowels.add(word[j]);
                if (seenVowels.size === 5) {
                    count++;
                }
            } else {
                break;
            }
        }
    }

    return count;
};