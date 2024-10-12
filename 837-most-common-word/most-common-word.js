/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let occurrences = {};
    paragraph = paragraph.split(/[ !?',;.]/).forEach(word => {
        word = word.toLowerCase();
        if (banned.includes(word)) return;
        if (word === '') return;
        if (occurrences[word]) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    });

    let maxOccurrence = Math.max(...Object.values(occurrences));
    let answer = Object.keys(occurrences).find(key => occurrences[key] === maxOccurrence);
    return answer;  
};