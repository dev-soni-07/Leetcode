/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let secondLargetDigit = -1, digits = [];

    for (let char of s) {
        let num = Number(char);
        if (!isNaN(num)){
            if (!digits.includes(num)){
                digits.push(num);
            }
        }
    }

    digits.sort((a, b) => b - a);

    if (digits.length > 1){
        secondLargetDigit = digits[1];
    }

    return secondLargetDigit;
};