/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length;
    
    let len = Array(n).fill(1);
    let count = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[j] + 1 > len[i]) {
                    len[i] = len[j] + 1;
                    count[i] = count[j];
                } else if (len[j] + 1 === len[i]) {
                    count[i] += count[j];
                }
            }
        }
    }

    let maxLen = Math.max(...len);
    let res = 0;

    for (let i = 0; i < n; i++) {
        if (len[i] === maxLen) {
            res += count[i];
        }
    }

    return res;
};