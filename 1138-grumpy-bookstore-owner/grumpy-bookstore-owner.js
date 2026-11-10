
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let alreadySatisfied = 0;
    let extraSatisfied = 0;
    let maxExtra = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            alreadySatisfied += customers[i];
        }
    }

    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            extraSatisfied += customers[i];
        }
    }

    maxExtra = extraSatisfied;

    for (let i = minutes; i < customers.length; i++) {
        if (grumpy[i - minutes] === 1) {
            extraSatisfied -= customers[i - minutes];
        }

        if (grumpy[i] === 1) {
            extraSatisfied += customers[i];
        }

        maxExtra = Math.max(maxExtra, extraSatisfied);
    }

    return alreadySatisfied + maxExtra;
};
