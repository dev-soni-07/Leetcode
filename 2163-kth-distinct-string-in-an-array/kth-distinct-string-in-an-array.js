/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let distinctStrings = [], obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            distinctStrings.push(key);
        }
    }

    return distinctStrings[k - 1] ? distinctStrings[k - 1] : "";
};