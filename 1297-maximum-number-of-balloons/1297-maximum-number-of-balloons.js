/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let charCount = {};
    for (let i = 0; i < text.length; i++) {
        if (charCount[text[i]]) {
            charCount[text[i]]++;
        } else {
            charCount[text[i]] = 1;
        }
    }

    const balloon = { 'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1 };

    let maxBalloons = Infinity;
    for (let char in balloon) {
        if (charCount[char]) {
            maxBalloons = Math.min(maxBalloons, Math.floor(charCount[char] / balloon[char]));
        } else {
            return 0;
        }
    }

    return maxBalloons;
};