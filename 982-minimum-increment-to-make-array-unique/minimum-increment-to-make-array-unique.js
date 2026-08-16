/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a - b);

    let moves = 0;
    let next = 0;

    for (let num of nums) {
        if (num < next) {
            moves += next - num;
        }

        next = Math.max(num, next) + 1;
    }

    return moves;
};