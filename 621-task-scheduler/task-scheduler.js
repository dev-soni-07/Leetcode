/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);
    
    for (let task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    
    freq.sort((a, b) => b - a);
    
    const maxFreq = freq[0];
    
    let maxCount = 0;
    for (let f of freq) {
        if (f === maxFreq) maxCount++;
    }
    
    const partCount = maxFreq - 1;
    const partLength = n + 1;
    
    const minTime = partCount * partLength + maxCount;
    
    return Math.max(tasks.length, minTime);
};