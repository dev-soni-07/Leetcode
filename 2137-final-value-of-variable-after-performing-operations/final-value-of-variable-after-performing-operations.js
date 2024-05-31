/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(operation of operations){
        if(operation === "--X" || operation === "X--"){
            x = x - 1;
        }
        if(operation === "++X" || operation === "X++"){
            x = x + 1;
        }
    }
    return x;
};