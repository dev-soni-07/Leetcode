/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let opened = 0;

    for(let char of s){
        if(char === "("){
            opened += 1;
            if(opened>1){
                result += "(";
            }
        }
        else if(char === ")"){
            opened -= 1;
            if(opened>0){
                result += ")";
            }
        }
    }

    return result;
};