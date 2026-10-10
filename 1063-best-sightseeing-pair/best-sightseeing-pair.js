/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxLeft = values[0] + 0;
    let maxScore = 0;

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxLeft + values[j] - j);

        maxLeft = Math.max(maxLeft, values[j] + j);
    }

    return maxScore;
};