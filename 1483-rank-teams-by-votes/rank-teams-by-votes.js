/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const n = votes[0].length;
    const teams = votes[0].split("");

    const count = {};

    for (const team of teams) {
        count[team] = new Array(n).fill(0);
    }

    for (const vote of votes) {
        for (let i = 0; i < n; i++) {
            count[vote[i]][i]++;
        }
    }

    teams.sort((a, b) => {
        for (let i = 0; i < n; i++) {
            if (count[a][i] !== count[b][i]) {
                return count[b][i] - count[a][i];
            }
        }

        return a.localeCompare(b);
    });

    return teams.join("");
};