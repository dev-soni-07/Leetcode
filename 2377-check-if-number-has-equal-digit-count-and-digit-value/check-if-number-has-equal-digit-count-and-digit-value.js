/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let digitFrequency = {};

    for (let digit of num) {
        if (digitFrequency[digit]) {
            digitFrequency[digit]++;
        } else {
            digitFrequency[digit] = 1;
        }
    }

    for (let i = 0; i < num.length; i++) {
        let expectedCount = parseInt(num[i]);
        let actualCount = digitFrequency[i] || 0;
        if (expectedCount !== actualCount) {
            return false;
        }
    }

    return true;
};