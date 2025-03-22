/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b);

    const n = arr.length;
    const removeCount = Math.floor(n * 0.05);

    const trimmedArray = arr.slice(removeCount, n - removeCount);

    const sum = trimmedArray.reduce((acc, num) => acc + num, 0);
    return sum / trimmedArray.length;
};