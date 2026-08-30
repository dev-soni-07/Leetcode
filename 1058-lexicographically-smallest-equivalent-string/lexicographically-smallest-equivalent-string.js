/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const parent = Array.from({ length: 26 }, (_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(a, b) {
        let pa = find(a);
        let pb = find(b);

        if (pa === pb) return;

        if (pa < pb) {
            parent[pb] = pa;
        } else {
            parent[pa] = pb;
        }
    }

    for (let i = 0; i < s1.length; i++) {
        const a = s1.charCodeAt(i) - 97;
        const b = s2.charCodeAt(i) - 97;

        union(a, b);
    }

    let ans = "";

    for (const ch of baseStr) {
        const x = ch.charCodeAt(0) - 97;
        const smallest = find(x);

        ans += String.fromCharCode(smallest + 97);
    }

    return ans;
};