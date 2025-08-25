/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let ops = 0;

    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    while (!isSorted(nums)) {
        let minSum = Infinity, idx = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            let sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                idx = i;
            }
        }
        nums.splice(idx, 2, minSum);
        ops++;
    }
    return ops;
};
