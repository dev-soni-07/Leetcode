/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let result = true, valueKeys = [], valueObj = {}, tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (valueObj[arr[i]]) {
            valueObj[arr[i]]++;
        } else {
            valueObj[arr[i]] = 1;
        }
    }

    valueKeys = Object.values(valueObj);

    for (let i = 0; i < valueKeys.length; i++) {
        if (tempArr.includes(valueKeys[i])) {
            result = false;
            break;
        } else {
            tempArr.push(valueKeys[i]);
        }
    }

    return result;
};