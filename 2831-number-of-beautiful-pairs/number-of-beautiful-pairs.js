/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    function firstDigit(n) {
        while (n >= 10) n = Math.floor(n / 10);
        return n;
    }

    function lastDigit(n) {
        return n % 10;
    }

    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    let count = 0;
    for (let i = 0; i < nums.length; ++i) {
        let fd = firstDigit(nums[i]);
        for (let j = i + 1; j < nums.length; ++j) {
            let ld = lastDigit(nums[j]);
            if (gcd(fd, ld) === 1) count++;
        }
    }
    return count;
}