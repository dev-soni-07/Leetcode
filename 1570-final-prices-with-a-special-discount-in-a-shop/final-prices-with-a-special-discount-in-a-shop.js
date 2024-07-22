/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];

    for (let i = 0; i < prices.length; i++) {
    let discountApplied = false;
    for (let j = i + 1; j < prices.length + 1; j++) {
        if (prices[j] <= prices[i]) {
        result.push(prices[i] - prices[j]);
        discountApplied = true;
        break;
        }
    }
    if (!discountApplied) {
        result.push(prices[i]);
    }
    }

    return result;
};