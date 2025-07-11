/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let total = 0;

    for (let num of nums) {
        let digits = String(num).split('');
        let maxDigit = Math.max(...digits.map(Number));
        let encryptedStr = String(maxDigit).repeat(digits.length);
        total += parseInt(encryptedStr, 10);
    }

    return total;
};
