
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    let count = 0;
    const n = intervals.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.max(intervals[i][0], intervals[j][0]) <=
                Math.min(intervals[i][1], intervals[j][1])) {
                count++;
            }
        }
    }

    return count;
};
