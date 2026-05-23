/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const MOD = 1e9 + 7;

    arr.sort((a, b) => a - b);

    const dp = new Map();

    for (let i = 0; i < arr.length; i++) {
        let ways = 1;

        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0) {
                const right = arr[i] / arr[j];

                if (dp.has(right)) {
                    ways =
                        (ways +
                            (dp.get(arr[j]) * dp.get(right)) % MOD) % MOD;
                }
            }
        }

        dp.set(arr[i], ways);
    }

    let ans = 0;

    for (const val of dp.values()) {
        ans = (ans + val) % MOD;
    }

    return ans;
};