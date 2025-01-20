/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const getDifferenceArray = (word) => {
        const diffArray = [];
        for (let i = 0; i < word.length - 1; i++) {
            diffArray.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
        }
        return diffArray;
    };

    const diffArrays = words.map(word => getDifferenceArray(word));

    const diffArrayCount = {};
    diffArrays.forEach((diffArray, index) => {
        const key = diffArray.join(',');
        if (!diffArrayCount[key]) {
            diffArrayCount[key] = [];
        }
        diffArrayCount[key].push(index);
    });

    let uniqueIndex;
    for (const key in diffArrayCount) {
        if (diffArrayCount[key].length === 1) {
            uniqueIndex = diffArrayCount[key][0];
            break;
        }
    }

    return words[uniqueIndex];
};