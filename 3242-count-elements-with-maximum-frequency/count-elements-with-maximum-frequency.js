/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    nums.sort((a, b) => a - b);

    let frequency = {};
    let temp_max = 0;

    for (let num of nums) {
        if (Object.keys(frequency).includes(String(num))) {
            frequency[num] += 1;
        } else {
            frequency[num] = 1;
        }
    }

    let max_occ = Math.max(...(Object.values(frequency)));

    for (let occurrence of Object.values(frequency)) {
        if (occurrence === max_occ) {
            temp_max += max_occ;
        }
    }

    return temp_max;
};