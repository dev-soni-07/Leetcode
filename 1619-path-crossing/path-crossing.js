/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x = 0, y = 0;
    const visited = new Set();
    visited.add(`${x},${y}`);

    for (let direction of path) {
        if (direction === 'N') {
            y += 1;
        } else if (direction === 'S') {
            y -= 1;
        } else if (direction === 'E') {
            x += 1;
        } else if (direction === 'W') {
            x -= 1;
        }

        const currentPos = `${x},${y}`;
        if (visited.has(currentPos)) {
            return true;
        }
        visited.add(currentPos);
    }

    return false;
};