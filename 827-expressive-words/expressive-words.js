/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {

    function getGroups(str) {
        let groups = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (j < str.length && str[j] === str[i]) {
                j++;
            }

            groups.push([str[i], j - i]);
            i = j;
        }

        return groups;
    }

    const sGroups = getGroups(s);
    let ans = 0;

    for (const word of words) {
        const wGroups = getGroups(word);

        if (sGroups.length !== wGroups.length) {
            continue;
        }

        let valid = true;

        for (let i = 0; i < sGroups.length; i++) {
            const [c1, len1] = sGroups[i];
            const [c2, len2] = wGroups[i];

            if (c1 !== c2) {
                valid = false;
                break;
            }

            if (len1 === len2) {
                continue;
            }

            if (len1 < 3 || len2 > len1) {
                valid = false;
                break;
            }
        }

        if (valid) ans++;
    }

    return ans;
};