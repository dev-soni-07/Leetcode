/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const countLetters = (str) => {
        const count = {};
        for (let char of str.toLowerCase()) {
            if (char >= 'a' && char <= 'z') {
                count[char] = (count[char] || 0) + 1;
            }
        }
        return count;
    };

    const licenseCount = countLetters(licensePlate);

    const canComplete = (word, licenseCount) => {
        const wordCount = countLetters(word);
        for (let char in licenseCount) {
            if (!wordCount[char] || wordCount[char] < licenseCount[char]) {
                return false;
            }
        }
        return true;
    };

    let shortestWord = null;
    for (let word of words) {
        if (canComplete(word, licenseCount)) {
            if (shortestWord === null || word.length < shortestWord.length) {
                shortestWord = word;
            }
        }
    }

    return shortestWord;
};