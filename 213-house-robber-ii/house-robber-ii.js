/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    const robLine = (arr) => {
        let prev = 0;
        let curr = 0;
        for (let num of arr) {
            let next = Math.max(curr, prev + num);
            prev = curr;
            curr = next;
        }
        return curr;
    };

    return Math.max(
        robLine(nums.slice(0, nums.length - 1)),
        robLine(nums.slice(1))
    );
};
