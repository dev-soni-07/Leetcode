/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if (arr.length === 0) return [];

    let sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

    let rankMap = new Map();
    for (let i = 0; i < sortedArr.length; i++) {
        rankMap.set(sortedArr[i], i + 1);
    }

    return arr.map(num => rankMap.get(num));
};