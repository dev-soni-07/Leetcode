/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exact = new Set();
    const caseMap = new Map();
    const vowelMap = new Map();

    const normalize = (word) => {
        return word
            .toLowerCase()
            .replace(/[aeiou]/g, '*');
    };

    for (const word of wordlist) {
        exact.add(word);

        const lower = word.toLowerCase();
        if (!caseMap.has(lower)) {
            caseMap.set(lower, word);
        }

        const norm = normalize(word);
        if (!vowelMap.has(norm)) {
            vowelMap.set(norm, word);
        }
    }

    const ans = [];

    for (const query of queries) {
        if (exact.has(query)) {
            ans.push(query);
            continue;
        }

        const lower = query.toLowerCase();
        if (caseMap.has(lower)) {
            ans.push(caseMap.get(lower));
            continue;
        }

        const norm = normalize(query);
        if (vowelMap.has(norm)) {
            ans.push(vowelMap.get(norm));
            continue;
        }

        ans.push("");
    }

    return ans;
};