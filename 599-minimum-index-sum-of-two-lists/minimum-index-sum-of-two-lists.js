/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let output = {}

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                if (output[i + j]) {
                    output[i + j].push(list1[i]);
                } else {
                    output[i + j] = [list1[i]];
                }
            }
        }
    }

    let minIndex = Math.min(...Object.keys(output));
    return output[minIndex];
};