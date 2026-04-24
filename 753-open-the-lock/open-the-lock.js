/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const visited = new Set();
    const queue = [["0000", 0]];

    if (dead.has("0000")) return -1;

    while (queue.length > 0) {
        const [curr, steps] = queue.shift();

        if (curr === target) return steps;

        if (dead.has(curr) || visited.has(curr)) continue;

        visited.add(curr);

        for (let i = 0; i < 4; i++) {
            let digit = parseInt(curr[i]);
            let up = (digit + 1) % 10;
            let next1 = curr.slice(0, i) + up + curr.slice(i + 1);
            let down = (digit + 9) % 10;
            let next2 = curr.slice(0, i) + down + curr.slice(i + 1);

            if (!visited.has(next1)) queue.push([next1, steps + 1]);
            if (!visited.has(next2)) queue.push([next2, steps + 1]);
        }
    }

    return -1;
};