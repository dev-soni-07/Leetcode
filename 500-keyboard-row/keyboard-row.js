/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const canBeTypedWithOneRow = (word) => {
        const lowerWord = word.toLowerCase();
        const firstRow = row1.has(lowerWord[0]) ? row1 : row2.has(lowerWord[0]) ? row2 : row3;
        for (let char of lowerWord) {
            if (!firstRow.has(char)) {
                return false;
            }
        }
        return true;
    };

    return words.filter(canBeTypedWithOneRow);
};