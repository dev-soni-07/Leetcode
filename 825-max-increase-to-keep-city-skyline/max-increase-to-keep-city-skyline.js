/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const n = grid.length;
    
    const rowMax = new Array(n).fill(0);
    const colMax = new Array(n).fill(0);
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            rowMax[r] = Math.max(rowMax[r], grid[r][c]);
        }
    }
    
    for (let c = 0; c < n; c++) {
        for (let r = 0; r < n; r++) {
            colMax[c] = Math.max(colMax[c], grid[r][c]);
        }
    }
    
    let total = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const allowed = Math.min(rowMax[r], colMax[c]);
            total += allowed - grid[r][c];
        }
    }
    
    return total;
};