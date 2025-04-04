/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row = 0, col = 0;

    for (let command of commands) {
        if (command === "UP") {
            row -= 1;
        } else if (command === "DOWN") {
            row += 1;
        } else if (command === "LEFT") {
            col -= 1;
        } else if (command === "RIGHT") {
            col += 1;
        }
    }

    return row * n + col;
};