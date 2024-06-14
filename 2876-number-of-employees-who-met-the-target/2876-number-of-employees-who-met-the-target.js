/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(h of hours){
        if(h>=target){
            count += 1;
        }
    }

    return count;
};