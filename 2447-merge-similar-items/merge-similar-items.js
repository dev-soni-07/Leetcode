/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map = new Map();

    for (const [value, weight] of items1) {
        map.set(value, (map.get(value) || 0) + weight);
    }

    for (const [value, weight] of items2) {
        map.set(value, (map.get(value) || 0) + weight);
    }

    return Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([value, weight]) => [value, weight]);
};