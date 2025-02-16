/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = Array.from({ length: 3 }, () => Array(3).fill(''));
    let player = 'A';

    for (const [row, col] of moves) {
        board[row][col] = player;
        player = player === 'A' ? 'B' : 'A';
    }

    const checkWin = (char) => {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === char && board[i][1] === char && board[i][2] === char) return true;
            if (board[0][i] === char && board[1][i] === char && board[2][i] === char) return true;
        }
        if (board[0][0] === char && board[1][1] === char && board[2][2] === char) return true;
        if (board[0][2] === char && board[1][1] === char && board[2][0] === char) return true;
        return false;
    };

    if (checkWin('A')) return 'A';
    if (checkWin('B')) return 'B';
    return moves.length === 9 ? 'Draw' : 'Pending';
};