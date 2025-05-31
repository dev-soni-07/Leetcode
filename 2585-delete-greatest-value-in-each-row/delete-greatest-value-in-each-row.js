/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for (let row of grid) {
        row.sort((a, b) => a - b);
    }
    let ans = 0;
    let n = grid[0].length;
    for (let col = n - 1; col >= 0; col--) {
        let maxVal = 0;
        for (let row = 0; row < grid.length; row++) {
            maxVal = Math.max(maxVal, grid[row][col]);
        }
        ans += maxVal;
    }
    return ans;
};