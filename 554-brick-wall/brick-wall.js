/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = new Map();
    
    for (let row of wall) {
        let sum = 0;
        
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    let maxEdges = 0;
    for (let count of map.values()) {
        maxEdges = Math.max(maxEdges, count);
    }
    
    return wall.length - maxEdges;
};