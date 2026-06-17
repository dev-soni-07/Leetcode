/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const result = [];

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let r = rStart;
    let c = cStart;

    result.push([r, c]);

    let step = 1;
    let dir = 0;

    while (result.length < rows * cols) {
        for (let repeat = 0; repeat < 2; repeat++) {
            const [dr, dc] = dirs[dir];

            for (let i = 0; i < step; i++) {
                r += dr;
                c += dc;

                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }

            dir = (dir + 1) % 4;
        }

        step++;
    }

    return result;
};