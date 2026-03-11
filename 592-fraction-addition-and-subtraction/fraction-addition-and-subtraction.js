/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {

    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    let num = 0, den = 1;

    let fractions = expression.match(/[+-]?\d+\/\d+/g);

    for (let frac of fractions) {
        let [n, d] = frac.split('/').map(Number);

        num = num * d + n * den;
        den = den * d;

        let g = gcd(num, den);
        num /= g;
        den /= g;
    }

    return num + "/" + den;
};