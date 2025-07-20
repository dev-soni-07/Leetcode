/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        const sub = nums.slice(i, i + k);
        const freq = new Map();

        for (let num of sub) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const sorted = [...freq.entries()]
            .sort((a, b) => b[1] - a[1] || b[0] - a[0])
            .slice(0, x)
            .map(([num]) => num);

        let sum = 0;
        for (let num of sub) {
            if (sorted.includes(num)) {
                sum += num;
            }
        }

        result.push(sum);
    }

    return result;
};
