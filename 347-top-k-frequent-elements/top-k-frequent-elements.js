/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = {};
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const buckets = Array(nums.length + 1).fill(0).map(() => []);

    for (let num in freq) {
        buckets[freq[num]].push(Number(num));
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
};
