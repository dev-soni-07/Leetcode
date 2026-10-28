
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    const first = new Map();
    const last = new Map();
    const freq = new Map();

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];

        if (!first.has(x)) {
            first.set(x, i);
        }

        last.set(x, i);
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let count = 0;

    for (const [x, frequency] of freq) {
        if (last.get(x) - first.get(x) + 1 === frequency) {
            count++;
        }
    }

    return count;
};
