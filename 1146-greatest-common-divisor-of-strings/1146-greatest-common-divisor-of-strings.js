/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const isDivisible = (str, sub) => {
        let repeated = '';
        while (repeated.length < str.length) {
            repeated += sub;
        }
        return repeated === str;
    };

    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };

    const len1 = str1.length;
    const len2 = str2.length;
    const gcdLength = gcd(len1, len2);
    const candidate = str1.substring(0, gcdLength);

    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    }
    return '';
};