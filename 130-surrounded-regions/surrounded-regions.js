/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Helper DFS to mark border-connected 'O's
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O') return;
    board[r][c] = '#'; // mark as safe (not surrounded)
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // Step 1: Mark all 'O's on the border (and connected to border)
  for (let r = 0; r < rows; r++) {
    dfs(r, 0);
    dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    dfs(0, c);
    dfs(rows - 1, c);
  }

  // Step 2: Flip surrounded regions and restore marked ones
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') board[r][c] = 'X'; // captured
      if (board[r][c] === '#') board[r][c] = 'O'; // safe
    }
  }
};
                