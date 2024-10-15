/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let answer = [];
    let rankObj = {};
    let sortedScore = [...score].sort((a, b) => b - a);

    for (let i = 0; i < sortedScore.length; i++) {
        if (i === 0) {
            rankObj[sortedScore[i]] = "Gold Medal";
        } else if (i === 1) {
            rankObj[sortedScore[i]] = "Silver Medal";
        } else if (i === 2) {
            rankObj[sortedScore[i]] = "Bronze Medal";
        } else {
            rankObj[sortedScore[i]] = (i + 1).toString();
        }
    }

    for (let i = 0; i < score.length; i++) {
        answer.push(rankObj[score[i]]);
    }

    return answer;
};