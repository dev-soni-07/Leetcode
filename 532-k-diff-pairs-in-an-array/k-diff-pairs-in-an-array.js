/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;

    const map = new Map();
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let count = 0;

    if (k === 0) {
        for (let [num, freq] of map) {
            if (freq >= 2) count++;
        }
    } else {
        for (let num of map.keys()) {
            if (map.has(num + k)) {
                count++;
            }
        }
    }

    return count;
};