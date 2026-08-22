/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    const seen = new Map();

    while (n > 0) {
        const key = cells.join("");

        if (seen.has(key)) {
            n %= seen.get(key) - n;
        }

        seen.set(key, n);

        if (n > 0) {
            n--;

            const next = new Array(8).fill(0);

            for (let i = 1; i < 7; i++) {
                next[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
            }

            cells = next;
        }
    }

    return cells;
};