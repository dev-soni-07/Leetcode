/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = "";

    for (let letter of s){
        if(letter === "i"){
            result = result.split("").reverse().join("");
        } else {
            result += letter;
        }
    }

    return result;
};