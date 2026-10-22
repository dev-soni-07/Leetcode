
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    let firstSeen = new Map();
    firstSeen.set("00000", -1);

    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (vowels.hasOwnProperty(ch)) {
            vowels[ch] = 1 - vowels[ch];
        }

        let state = `${vowels.a}${vowels.e}${vowels.i}${vowels.o}${vowels.u}`;

        if (firstSeen.has(state)) {
            maxLen = Math.max(maxLen, i - firstSeen.get(state));
        } else {
            firstSeen.set(state, i);
        }
    }

    return maxLen;
};
