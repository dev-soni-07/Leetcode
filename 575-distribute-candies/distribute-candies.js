/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candyTypes = new Set(candyType).size, maxCandies = candyType.length / 2;

    if (candyTypes >= maxCandies) {
        return maxCandies;
    }

    if (candyTypes < maxCandies) {
        return candyTypes;
    }

};