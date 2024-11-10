/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let numBefore = num.join('');
    let numAfter = BigInt(numBefore) + BigInt(k);
    let result = numAfter.toString().split('').map(Number);
    return result;
};