/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = '';

    for (let i = 0; i < s.length; i += 2 * k)  {
        let part1 = s.slice(i, i + k).split('').reverse().join('');
        let part2 = s.slice(i + k, i + 2 * k);
        result += part1 + part2;
    }

    return result;
};