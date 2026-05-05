/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const map = new Map();
    
    for (let a of answers) {
        map.set(a, (map.get(a) || 0) + 1);
    }
    
    let total = 0;
    
    for (let [x, freq] of map) {
        const groupSize = x + 1;
        const groups = Math.ceil(freq / groupSize);
        total += groups * groupSize;
    }
    
    return total;
};