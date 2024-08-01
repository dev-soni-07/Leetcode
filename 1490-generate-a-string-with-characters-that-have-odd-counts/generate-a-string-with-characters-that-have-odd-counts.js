/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let string = "";

    if (n % 2 !== 0) {
        string = "a".repeat(n);
    } else {
        string = "a".repeat(n - 1) + "b";
    }

    return string;
};