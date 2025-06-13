/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const received = new Array(n).fill(false);
    let current = 0;
    let step = 1;

    while (!received[current]) {
        received[current] = true;
        current = (current + step * k) % n;
        step++;
    }

    const losers = [];
    for (let i = 0; i < n; i++) {
        if (!received[i]) losers.push(i + 1);
    }
    return losers;
};