/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let answer = [];
    let words = title.split(" ");

    for (let word of words) {
        if (word.length < 3) {
            answer.push(word.toLowerCase());
        } else {
            answer.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        }
    }

    return answer.join(" ");
};