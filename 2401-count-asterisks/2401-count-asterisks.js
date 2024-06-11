/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let result = 0;

    for(char of s){
        if(char === "|"){
            count += 1;
        }
        if(count % 2 == 0){
            if(char === "*"){
                result += 1;
            }
        }
    }

    return result;
};