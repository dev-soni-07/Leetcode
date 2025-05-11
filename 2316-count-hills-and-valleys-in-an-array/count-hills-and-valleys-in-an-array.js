/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;

    let filteredNums = nums.filter((num, index) => index === 0 || num !== nums[index - 1]);

    for (let i = 1; i < filteredNums.length - 1; i++) {
        if (filteredNums[i] > filteredNums[i - 1] && filteredNums[i] > filteredNums[i + 1]) {
            count++;
        } else if (filteredNums[i] < filteredNums[i - 1] && filteredNums[i] < filteredNums[i + 1]) {
            count++;
        }
    }

    return count;
};