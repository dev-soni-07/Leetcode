/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let n = nums.length;
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = 0;
        } else {
            let newIndex = (i + nums[i]) % n;
            if (newIndex < 0) newIndex += n;
            result[i] = nums[newIndex];
        }
    }

    return result;
};
