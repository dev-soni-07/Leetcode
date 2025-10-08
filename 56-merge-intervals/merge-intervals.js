/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  let merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    let curr = intervals[i];
    
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }
  
  return merged;
};
