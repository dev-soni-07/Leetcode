/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let minFinish = Infinity;
    
    for (let [s, t] of tasks) {
        minFinish = Math.min(minFinish, s + t);
    }
    
    return minFinish;
};
