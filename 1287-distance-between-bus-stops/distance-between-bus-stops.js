/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let clockwiseDistance = 0;
    for (let i = start; i < destination; i++) {
        clockwiseDistance += distance[i];
    }

    let counterclockwiseDistance = 0;
    for (let i = destination; i != start; i = (i + 1) % distance.length) {
        counterclockwiseDistance += distance[i];
    }

    return Math.min(clockwiseDistance, counterclockwiseDistance);
};