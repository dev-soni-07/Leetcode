/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let first = 0, second = 0;

    for (i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            first++;
        } else if (moves[i] === "D") {
            first--;
        } else if (moves[i] === "L") {
            second++;
        } else if (moves[i] === "R") {
            second--;
        }
    }

    return first === 0 && second === 0;
};