/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueCandies = [], maxCandies = candyType.length / 2;

    candyType.forEach(candy => {
        if (!uniqueCandies.includes(candy)) {
            uniqueCandies.push(candy);
        }
    })

    if (uniqueCandies.length > maxCandies) {
        return maxCandies;
    } else {
        return uniqueCandies.length;
    }

};