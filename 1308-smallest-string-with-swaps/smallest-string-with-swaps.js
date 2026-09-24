/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const n = s.length;

    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);

        if (rootA === rootB) return;

        if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB;
        } else if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA;
        } else {
            parent[rootB] = rootA;
            rank[rootA]++;
        }
    }

    for (const [a, b] of pairs) {
        union(a, b);
    }

    const groups = new Map();

    for (let i = 0; i < n; i++) {
        const root = find(i);

        if (!groups.has(root)) {
            groups.set(root, []);
        }

        groups.get(root).push(i);
    }

    const result = s.split("");

    for (const indices of groups.values()) {
        const chars = indices.map(i => result[i]);

        chars.sort();

        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = chars[i];
        }
    }

    return result.join("");
};