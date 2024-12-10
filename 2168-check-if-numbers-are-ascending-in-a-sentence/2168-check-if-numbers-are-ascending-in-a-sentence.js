/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const tokens = s.split(' ');
    let prevNumber = -1;

    for (let token of tokens) {
        if (!isNaN(token)) {
            let currentNumber = parseInt(token, 10);

            if (currentNumber <= prevNumber) {
                return false;
            }

            prevNumber = currentNumber;
        }
    }

    return true;
};