/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const [r, c] = click;
    
    if (board[r][c] === 'M') {
        board[r][c] = 'X';
        return board;
    }
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];
    
    const rows = board.length;
    const cols = board[0].length;
    
    function dfs(x, y) {
        if (board[x][y] !== 'E') return;
        
        let mineCount = 0;
        
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols &&
                board[nx][ny] === 'M'
            ) {
                mineCount++;
            }
        }
        
        if (mineCount > 0) {
            board[x][y] = mineCount.toString();
            return;
        }
        
        board[x][y] = 'B';
        
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols
            ) {
                dfs(nx, ny);
            }
        }
    }
    
    dfs(r, c);
    return board;
};