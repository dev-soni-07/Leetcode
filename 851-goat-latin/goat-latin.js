/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let sentenceArr = sentence.split(' '), temp = [], vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < sentenceArr.length; i++) {
        if (vowels.includes(sentenceArr[i][0].toLowerCase())) {
            sentenceArr[i] += 'ma';
        } else {
            console.log(sentenceArr[i]);
            sentenceArr[i] = sentenceArr[i].slice(1) + sentenceArr[i][0] + 'ma';
        }
        sentenceArr[i] += 'a'.repeat(i + 1);
        temp.push(sentenceArr[i]);
    }

    return temp.join(' ');
};