/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    let res = [];
    let m = grid.length, n = grid[0].length;
    let take = true;
    
    for (let i = 0; i < m; i++) {
        let row = (i % 2 === 0) ? grid[i] : grid[i].slice().reverse();
        for (let val of row) {
            if (take) res.push(val);
            take = !take;
        }
    }
    return res;
};
