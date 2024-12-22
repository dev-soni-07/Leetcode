/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let countMap = new Map();
    let maxLength = 0;

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [key, value] of countMap) {
        if (countMap.has(key + 1)) {
            maxLength = Math.max(maxLength, value + countMap.get(key + 1));
        }
    }

    return maxLength;
};