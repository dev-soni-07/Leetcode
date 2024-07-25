/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let count = 0, rods = {};

    for (let i = 0; i < rings.length; i = i + 2) {
    let color = rings[i];
    let rod = rings[i + 1];
    if (rods[rod] === undefined) {
        rods[rod] = color;
    } else {
        if (!rods[rod].includes(color)) {
        rods[rod] = rods[rod] + color;
        }
    }
    }


    for (let rod in rods) {
    if (rods[rod].length === 3) {
        count++;
    }
    }

    return count;
};