/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let result = 0, expected = [...heights];

    expected.sort((a, b) => a - b);

    for (let i = 0; i < expected.length; i++) {
        if (heights[i] !== expected[i]) {
            result++;
        }
    }

    return result;
};