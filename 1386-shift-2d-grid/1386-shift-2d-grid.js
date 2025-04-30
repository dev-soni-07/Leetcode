/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const totalElements = m * n;

    k = k % totalElements;

    const flatGrid = grid.flat();

    const shifted = flatGrid.slice(-k).concat(flatGrid.slice(0, -k));

    const result = [];
    for (let i = 0; i < m; i++) {
        result.push(shifted.slice(i * n, (i + 1) * n));
    }

    return result;
};