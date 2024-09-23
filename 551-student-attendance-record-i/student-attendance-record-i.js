/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let isLessThanTwoA = true, isLessThanThreeL = true;
    if (s.match(/A/g)?.length >= 2) isLessThanTwoA = false;
    if (s.includes("LLL")) isLessThanThreeL = false;
    return (isLessThanTwoA && isLessThanThreeL);
};