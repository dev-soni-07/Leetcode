/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [], sum = 0;;

    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(+operations[i])) {
            record.push(+operations[i]);
            sum += +operations[i];
        }
        if (operations[i] === "+") {
            let add = record[record.length - 1] + record[record.length - 2];
            record.push(add);
            sum += add
        }
        if (operations[i] === "D") {
            let double = record[record.length - 1] * 2;
            record.push(double);
            sum += double;
        }
        if (operations[i] === "C") {
            let poppedItem = record.pop();
            sum -= poppedItem;
        }
    }

    return sum;
};