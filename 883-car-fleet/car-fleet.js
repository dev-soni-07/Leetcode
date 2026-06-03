/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let maxTime = 0;

    for (let [pos, spd] of cars) {
        let time = (target - pos) / spd;

        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
    }

    return fleets;
};