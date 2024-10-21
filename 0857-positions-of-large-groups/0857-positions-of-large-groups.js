/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let answer = [];
    let start = 0;
    let end = 0;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
            end = i;
        } else {
            if (count >= 3) {
                answer.push([start, end]);
            }
            start = i;
            count = 1;
        }
    }

    if (count >= 3) {
        answer.push([start, end]);
    }

    return answer;
};