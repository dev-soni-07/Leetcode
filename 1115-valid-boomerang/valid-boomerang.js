/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [p1, p2, p3] = points;

    const area = p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1]);

    return area !== 0;
};