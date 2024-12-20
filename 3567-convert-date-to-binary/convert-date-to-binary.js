/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const [year, month, day] = date.split('-');

    const yearBinary = parseInt(year, 10).toString(2);
    const monthBinary = parseInt(month, 10).toString(2);
    const dayBinary = parseInt(day, 10).toString(2);

    return `${yearBinary}-${monthBinary}-${dayBinary}`;
};