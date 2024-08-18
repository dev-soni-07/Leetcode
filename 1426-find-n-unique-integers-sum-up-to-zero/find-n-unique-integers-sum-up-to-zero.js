/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let uniqueIntegers = [];

    if (n % 2 === 0) {
        for (let i = 1; i <= n / 2; i++) {
            uniqueIntegers.push(-i);
            uniqueIntegers.push(i);
        }
    } else {
        uniqueIntegers.push(0);
        for (let i = 1; i <= n / 2; i++) {
            uniqueIntegers.push(-i);
            uniqueIntegers.push(i);
        }
    }

    return uniqueIntegers.sort((a, b) => a - b);
};