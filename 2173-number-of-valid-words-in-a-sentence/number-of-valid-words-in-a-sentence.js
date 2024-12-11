/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const tokens = sentence.split(/\s+/);

    const isValidWord = (token) => {
        if (/\d/.test(token)) return false;

        if ((token.match(/-/g) || []).length > 1 || /(^-|-$|[^a-z]-|-[^a-z])/.test(token)) return false;

        if ((token.match(/[!.,]/g) || []).length > 1 || /[!.,](?=.*[a-z-])/.test(token)) return false;

        return true;
    };

    let validWordCount = 0;
    for (const token of tokens) {
        if (token && isValidWord(token)) {
            validWordCount++;
        }
    }

    return validWordCount;
};