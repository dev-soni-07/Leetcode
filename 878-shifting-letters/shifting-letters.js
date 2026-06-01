/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let n = s.length;
    let totalShift = 0;
    let result = [];

    for (let i = n - 1; i >= 0; i--) {
        totalShift = (totalShift + shifts[i]) % 26;

        let charCode = s.charCodeAt(i) - 97;
        let newCode = (charCode + totalShift) % 26;

        result.push(String.fromCharCode(newCode + 97));
    }

    return result.reverse().join('');
};