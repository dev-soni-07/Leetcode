/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let maxScore = -1;
    let result = Infinity;

    for (let d of divisors) {
        let score = 0;
        for (let n of nums) {
            if (n % d === 0) score++;
        }
        if (score > maxScore || (score === maxScore && d < result)) {
            maxScore = score;
            result = d;
        }
    }
    return result;
};