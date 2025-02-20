/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let countL = 0;
    let countR = 0;
    let countUnderscore = 0;

    for (let move of moves) {
        if (move === 'L') {
            countL++;
        } else if (move === 'R') {
            countR++;
        } else if (move === '_') {
            countUnderscore++;
        }
    }

    if (countL >= countR) {
        countL += countUnderscore;
    } else {
        countR += countUnderscore;
    }

    return Math.abs(countL - countR);
};