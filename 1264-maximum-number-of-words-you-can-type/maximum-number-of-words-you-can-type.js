/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    let splittedString = text.split(' ');

    for (let i = 0; i < splittedString.length; i++) {
        let canType = true;
        for (let j = 0; j < brokenLetters.length; j++) {
            if (splittedString[i].includes(brokenLetters[j])) {
                canType = false;
                break;
            }
        }
        if (canType) {
            count++;
        }
    }

    return count;
};