/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    const n = s.length;
    let encrypted = "";

    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        encrypted += s[newIndex];
    }

    return encrypted;
};