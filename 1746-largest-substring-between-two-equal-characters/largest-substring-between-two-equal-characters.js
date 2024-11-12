/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let answer = -1;
    let charIndices = {};

    for (let i = 0; i < s.length; i++) {
        if (charIndices[s[i]] === undefined) {
            charIndices[s[i]] = i;
        } else {
            let length = i - charIndices[s[i]] - 1;
            answer = Math.max(answer, length);
        }
    }

    return answer;
};