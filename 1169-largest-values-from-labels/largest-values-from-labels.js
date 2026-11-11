
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    const items = [];

    for (let i = 0; i < values.length; i++) {
        items.push([values[i], labels[i]]);
    }

    items.sort((a, b) => b[0] - a[0]);

    const labelCount = new Map();
    let sum = 0;
    let selected = 0;

    for (const [value, label] of items) {

        if (selected === numWanted) break;

        const count = labelCount.get(label) || 0;

        if (count >= useLimit) continue;

        sum += value;
        selected++;

        labelCount.set(label, count + 1);
    }

    return sum;
};
