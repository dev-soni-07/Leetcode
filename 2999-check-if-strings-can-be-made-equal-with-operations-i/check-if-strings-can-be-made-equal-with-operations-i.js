/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let even1 = [s1[0], s1[2]].sort().join('');
    let even2 = [s2[0], s2[2]].sort().join('');
    let odd1 = [s1[1], s1[3]].sort().join('');
    let odd2 = [s2[1], s2[3]].sort().join('');

    return even1 === even2 && odd1 === odd2;
};