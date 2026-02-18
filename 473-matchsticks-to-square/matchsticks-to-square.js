/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if (matchsticks.length < 4) return false;

    const sum = matchsticks.reduce((a, b) => a + b, 0);
    if (sum % 4 !== 0) return false;

    const target = sum / 4;

    matchsticks.sort((a, b) => b - a);

    const sides = [0, 0, 0, 0];

    function backtrack(index) {
        if (index === matchsticks.length) {
            return (
                sides[0] === target &&
                sides[1] === target &&
                sides[2] === target &&
                sides[3] === target
            );
        }

        const stick = matchsticks[index];

        for (let i = 0; i < 4; i++) {
            if (sides[i] + stick > target) continue;

            let skip = false;
            for (let j = 0; j < i; j++) {
                if (sides[j] === sides[i]) {
                    skip = true;
                    break;
                }
            }
            if (skip) continue;

            sides[i] += stick;
            if (backtrack(index + 1)) return true;
            sides[i] -= stick;
        }

        return false;
    }

    return backtrack(0);
};