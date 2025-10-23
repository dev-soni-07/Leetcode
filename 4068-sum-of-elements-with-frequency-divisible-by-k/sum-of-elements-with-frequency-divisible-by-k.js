/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    const freq = {};
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    let sum = 0;
    
    for (let num of nums) {
        if (freq[num] % k === 0) {
            sum += num;
        }
    }
    
    return sum;
};
