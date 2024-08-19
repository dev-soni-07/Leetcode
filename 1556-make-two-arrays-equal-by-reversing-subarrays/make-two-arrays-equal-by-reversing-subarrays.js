/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arr.sort((a, b) => a - b);
    target.sort((a, b) => a - b);

    const isArrayEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    return isArrayEqual(arr, target);
};