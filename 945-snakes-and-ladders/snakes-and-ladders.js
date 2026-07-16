/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;

    function getPosition(num) {
        let row = n - 1 - Math.floor((num - 1) / n);
        let col = (num - 1) % n;

        if (((n - 1 - row) % 2) === 1) {
            col = n - 1 - col;
        }

        return [row, col];
    }

    const queue = [[1, 0]];
    const visited = new Set();
    visited.add(1);

    while (queue.length) {
        const [curr, moves] = queue.shift();

        if (curr === n * n) return moves;

        for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
            let destination = next;
            const [r, c] = getPosition(next);

            if (board[r][c] !== -1) {
                destination = board[r][c];
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push([destination, moves + 1]);
            }
        }
    }

    return -1;
};