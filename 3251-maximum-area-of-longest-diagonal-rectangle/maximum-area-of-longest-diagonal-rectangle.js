/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;
    for (let [l, w] of dimensions) {
        const diagonal = Math.sqrt(l * l + w * w);
        const area = l * w;
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        } else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};