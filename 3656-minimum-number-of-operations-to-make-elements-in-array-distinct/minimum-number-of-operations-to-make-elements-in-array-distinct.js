/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ops = 0;
    while (true) {
        let seen = new Set();
        let hasDuplicate = false;
        for (let num of nums) {
            if (seen.has(num)) {
                hasDuplicate = true;
                break;
            }
            seen.add(num);
        }
        if (!hasDuplicate) return ops;
        nums.splice(0, 3);
        ops++;
    }
};
