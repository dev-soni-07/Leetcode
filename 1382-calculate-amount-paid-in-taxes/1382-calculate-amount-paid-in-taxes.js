/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let tax = 0;
    let prev = 0;
    for (let i = 0; i < brackets.length && income > 0; i++) {
        let [upper, percent] = brackets[i];
        let taxable = Math.min(income, upper - prev);
        tax += taxable * (percent / 100);
        income -= taxable;
        prev = upper;
    }
    return tax;
};