/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let asterisk_count  = 0;
    let inside_pair = false;

    for(char of s){
        if(char === "|"){
            inside_pair = !inside_pair;
        }
        if(char === "*" && !inside_pair){
            asterisk_count += 1;
        }
    }

    return asterisk_count;
};