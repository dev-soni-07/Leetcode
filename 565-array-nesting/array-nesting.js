/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === -1) continue;

        let count = 0;
        let j = i;

        while (nums[j] !== -1) {
            let next = nums[j];
            nums[j] = -1;
            j = next;
            count++;
        }

        maxLen = Math.max(maxLen, count);
    }

    return maxLen;
};