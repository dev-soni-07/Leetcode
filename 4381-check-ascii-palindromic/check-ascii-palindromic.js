
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function(s) {
    let binary = "";

    for (let char of s) {
        binary += char.charCodeAt(0).toString(2).padStart(8, '0');
    }

    return binary === binary.split('').reverse().join('');
};
