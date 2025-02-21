/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('');
    let n = arr.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let j = n - i - 1;
        if (arr[i] !== arr[j]) {
            arr[i] = arr[j] = arr[i] < arr[j] ? arr[i] : arr[j];
        }
    }

    return arr.join('');
};