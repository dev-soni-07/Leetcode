/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const frequency = {};

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    let luckyInteger = -1;

    for (let num in frequency) {
        if (parseInt(num) === frequency[num]) {
            luckyInteger = Math.max(luckyInteger, parseInt(num));
        }
    }

    return luckyInteger;
};