/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    const [tx, ty] = target;

    let bestIndex = -1;
    let bestDistance = Infinity;

    for (let i = 0; i < drones.length; i++) {
        const [x, y, range] = drones[i];

        const distance = Math.abs(x - tx) + Math.abs(y - ty);

        if (distance <= range) {
            if (distance < bestDistance) {
                bestDistance = distance;
                bestIndex = i;
            }
        }
    }

    return bestIndex;
};