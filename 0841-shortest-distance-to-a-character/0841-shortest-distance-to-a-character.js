/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let answer = new Array(s.length).fill(Infinity);

    let prev = -Infinity;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.abs(i - prev);
    }

    prev = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        answer[i] = Math.min(answer[i], Math.abs(i - prev));
    }

    return answer;  
};