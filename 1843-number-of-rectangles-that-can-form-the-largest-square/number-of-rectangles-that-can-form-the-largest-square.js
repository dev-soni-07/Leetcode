/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let lengths = [], maxLen = 0, count = 0;

    for (let length of rectangles) {
        let l = length[0], w = length[1], k = Math.min(l, w);
        lengths.push(k);
        if (maxLen < k) {
            maxLen = k;
        }
    }

    lengths.forEach((element) => {
        if(element === maxLen){
            count += 1;
        }
    })

    return count;
};