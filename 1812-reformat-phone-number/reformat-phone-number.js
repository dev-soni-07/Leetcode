/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    number = number.replace(/[\s-]/g, '');

    let result = '';
    let len = number.length;
    let i = 0;

    while (len > 4) {
        result += number.substr(i, 3) + '-';
        i += 3;
        len -= 3;
    }

    if (len === 4) {
        result += number.substr(i, 2) + '-' + number.substr(i + 2, 2);
    } else {
        result += number.substr(i, len);
    }

    return result;
};