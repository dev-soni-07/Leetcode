/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    amount.sort((a, b) => b - a);

    let seconds = 0;

    while (amount[0] > 0) {
        if (amount[1] > 0) {
            amount[0]--;
            amount[1]--;
        } else {
            amount[0]--;
        }
        seconds++;

        amount.sort((a, b) => b - a);
    }

    return seconds;
};