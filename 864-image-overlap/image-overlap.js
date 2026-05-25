/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length;
    
    let ones1 = [];
    let ones2 = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (img1[i][j] === 1) {
                ones1.push([i, j]);
            }
            if (img2[i][j] === 1) {
                ones2.push([i, j]);
            }
        }
    }
    
    let map = new Map();
    let ans = 0;
    
    for (let [x1, y1] of ones1) {
        for (let [x2, y2] of ones2) {
            let dx = x2 - x1;
            let dy = y2 - y1;
            
            let key = `${dx},${dy}`;
            
            map.set(key, (map.get(key) || 0) + 1);
            ans = Math.max(ans, map.get(key));
        }
    }
    
    return ans;
};