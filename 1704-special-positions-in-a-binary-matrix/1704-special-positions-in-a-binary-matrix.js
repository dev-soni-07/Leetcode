/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let rowCount = new Array(mat.length).fill(0);
    let colCount = new Array(mat[0].length).fill(0);

    // Count the number of 1s in each row and column
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let specialCount = 0;

    // Check for special positions
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                specialCount++;
            }
        }
    }

    return specialCount;
};