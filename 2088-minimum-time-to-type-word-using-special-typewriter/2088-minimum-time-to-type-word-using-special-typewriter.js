/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let timeTaken = 0;
    let currentPosition = 0;

    for (let i = 0; i < word.length; i++) {
        let targetIndex = alphabets.indexOf(word[i]);
        let clockwise = Math.abs(targetIndex - currentPosition);
        let anticlockwise = 26 - clockwise;

        timeTaken += Math.min(clockwise, anticlockwise) + 1;

        currentPosition = targetIndex;
    }

    return timeTaken;
};