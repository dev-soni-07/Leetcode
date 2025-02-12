/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;

    const toCharSet = (word) => new Set(word);

    const isSimilar = (word1, word2) => {
        const set1 = toCharSet(word1);
        const set2 = toCharSet(word2);
        if (set1.size !== set2.size) return false;
        for (let char of set1) {
            if (!set2.has(char)) return false;
        }
        return true;
    };

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isSimilar(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};