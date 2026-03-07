/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let res = Array.from({length: m}, () => Array(n).fill(Infinity));
    let queue = [];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                res[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
    
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    while (queue.length) {
        let [r, c] = queue.shift();
        
        for (let [dr, dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;
            
            if (nr >= 0 && nc >= 0 && nr < m && nc < n) {
                if (res[nr][nc] > res[r][c] + 1) {
                    res[nr][nc] = res[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }
    }
    
    return res;
};