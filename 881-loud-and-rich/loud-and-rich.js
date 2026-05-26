/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;

    const graph = Array.from({ length: n }, () => []);

    for (const [a, b] of richer) {
        graph[b].push(a);
    }

    const ans = Array(n).fill(-1);

    function dfs(x) {
        if (ans[x] !== -1) return ans[x];

        ans[x] = x;

        for (const nei of graph[x]) {
            const candidate = dfs(nei);

            if (quiet[candidate] < quiet[ans[x]]) {
                ans[x] = candidate;
            }
        }

        return ans[x];
    }

    for (let i = 0; i < n; i++) {
        dfs(i);
    }

    return ans;
};