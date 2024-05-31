/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    for(stone of stones){
        for(jewel of jewels){
            if(jewel === stone){
                result = result + 1;
            }
        }
    }
    return result;
};