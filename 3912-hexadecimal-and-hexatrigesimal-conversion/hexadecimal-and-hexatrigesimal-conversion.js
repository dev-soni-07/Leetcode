/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    const toBase = (num, base) => {
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let res = '';
        while (num > 0) {
            res = digits[num % base] + res;
            num = Math.floor(num / base);
        }
        return res || '0';
    };

    const hex = toBase(n * n, 16);
    const hex36 = toBase(n * n * n, 36);
    return hex + hex36;
};
