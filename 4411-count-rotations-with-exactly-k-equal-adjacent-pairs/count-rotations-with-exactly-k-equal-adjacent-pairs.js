
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function(s, k) {
    const n = s.length;
    let count = 0;

    for (let r = 0; r < n; r++) {
        const rotated = s.slice(r) + s.slice(0, r);
        let score = 0;

        for (let i = 0; i < n - 1; i++) {
            if (rotated[i] === rotated[i + 1]) {
                score++;
            }
        }

        if (score === k) {
            count++;
        }
    }

    return count;
};
