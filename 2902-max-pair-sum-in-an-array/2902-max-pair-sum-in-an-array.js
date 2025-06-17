/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    function getMaxDigit(num) {
        let max = 0;
        while (num > 0) {
            max = Math.max(max, num % 10);
            num = Math.floor(num / 10);
        }
        return max;
    }

    const groups = {};

    for (const num of nums) {
        const digit = getMaxDigit(num);
        if (!groups[digit]) groups[digit] = [];
        groups[digit].push(num);
    }

    let result = -1;
    for (const digit in groups) {
        const arr = groups[digit];
        if (arr.length >= 2) {
            arr.sort((a, b) => b - a);
            result = Math.max(result, arr[0] + arr[1]);
        }
    }

    return result;
};