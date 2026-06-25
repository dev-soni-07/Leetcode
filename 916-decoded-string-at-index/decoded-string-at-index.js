/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let size = 0n;
    let K = BigInt(k);

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            size *= BigInt(ch);
        } else {
            size++;
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];

        K %= size;

        if (ch >= 'a' && ch <= 'z') {
            if (K === 0n) return ch;
            size--;
        } else {
            size /= BigInt(ch);
        }
    }
};