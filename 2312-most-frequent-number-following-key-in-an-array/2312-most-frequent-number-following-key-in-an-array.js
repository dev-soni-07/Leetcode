/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    const freqMap = new Map();

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const target = nums[i + 1];
            freqMap.set(target, (freqMap.get(target) || 0) + 1);
        }
    }

    let maxCount = 0;
    let result = -1;

    for (const [target, count] of freqMap.entries()) {
        if (count > maxCount) {
            maxCount = count;
            result = target;
        }
    }

    return result;
};