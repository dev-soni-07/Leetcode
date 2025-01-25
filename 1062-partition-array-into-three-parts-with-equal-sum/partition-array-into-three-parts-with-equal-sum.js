/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    if (totalSum % 3 !== 0) return false;

    const targetSum = totalSum / 3;
    let runningSum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        runningSum += arr[i];
        if (runningSum === targetSum) {
            runningSum = 0;
            count++;
        }
    }

    return count >= 3;
};