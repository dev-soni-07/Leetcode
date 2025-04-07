/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let reverseDegreeSum = 0;

    for (let i = 0; i < s.length; i++) {
        let reverseAlphabetPosition = 26 - (s.charCodeAt(i) - 'a'.charCodeAt(0));
        reverseDegreeSum += reverseAlphabetPosition * (i + 1);
    }

    return reverseDegreeSum;
};