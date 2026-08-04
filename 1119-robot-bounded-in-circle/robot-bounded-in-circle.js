/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let x = 0, y = 0;
    let dir = 0;

    for (let ch of instructions) {
        if (ch === 'G') {
            x += dirs[dir][0];
            y += dirs[dir][1];
        } else if (ch === 'L') {
            dir = (dir + 3) % 4;
        } else {
            dir = (dir + 1) % 4;
        }
    }

    return (x === 0 && y === 0) || dir !== 0;
};