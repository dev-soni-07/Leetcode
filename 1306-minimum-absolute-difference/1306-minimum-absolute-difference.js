/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }

    let result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    return result;  
};