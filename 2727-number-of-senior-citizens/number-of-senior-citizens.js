/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;

    for (let i = 0; i < details.length; i++) {
        let age = String(details[i][11]) + String(details[i][12]);
        if (age > 60){
            count++;
        }
    }

    return count;
};