/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let freqMap = new Map();
    let pairs = 0;

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let count of freqMap.values()) {
        pairs += Math.floor(count / 2);
    }

    let leftovers = nums.length - pairs * 2;
    return [pairs, leftovers];
};