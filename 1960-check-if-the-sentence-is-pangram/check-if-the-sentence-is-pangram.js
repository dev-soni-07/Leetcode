/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let unique_letter = [];
    for (let char of sentence){
        if (!unique_letter.includes(char)){
            unique_letter.push(char);
        }
    }

    return unique_letter.length == 26;
};