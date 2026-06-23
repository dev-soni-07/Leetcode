/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    if (s.includes('@')) {
        s = s.toLowerCase();

        const [name, domain] = s.split('@');

        return name[0] + "*****" + name[name.length - 1] + "@" + domain;
    }

    let digits = "";

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            digits += ch;
        }
    }

    const countryLen = digits.length - 10;
    const local = "***-***-" + digits.slice(-4);

    if (countryLen === 0) return local;

    return "+" + "*".repeat(countryLen) + "-" + local;
};