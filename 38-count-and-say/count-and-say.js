/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1";

    for (let i = 1; i < n; i++) {
        let next = "", count = 1;
        for (let j = 0; j < s.length; j++) {
            if (s[j] === s[j + 1]) {
                count++;
            } else {
                next += count + s[j];
                count = 1;
            }
        }
        s = next;
    }

    return s;
};
