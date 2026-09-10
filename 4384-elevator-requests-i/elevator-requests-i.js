/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let currentFloor = 0;
    let totalTime = 0;

    for (const floor of requests) {
        totalTime += Math.abs(floor - currentFloor);
        currentFloor = floor;
    }

    return totalTime;
};