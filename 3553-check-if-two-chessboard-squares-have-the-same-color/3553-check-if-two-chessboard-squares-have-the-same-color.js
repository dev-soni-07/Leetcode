/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const getColor = (coordinate) => {
        const column = coordinate[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        const row = parseInt(coordinate[1]);
        return (column + row) % 2 === 0;
    };

    return getColor(coordinate1) === getColor(coordinate2);
};