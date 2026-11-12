
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const freq = new Map();

    for (const code of barcodes) {
        freq.set(code, (freq.get(code) || 0) + 1);
    }

    const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);

    const result = new Array(barcodes.length);
    let index = 0;

    for (const [code, count] of sorted) {
        for (let i = 0; i < count; i++) {
            result[index] = code;
            index += 2;

            if (index >= barcodes.length) {
                index = 1;
            }
        }
    }

    return result;
};
