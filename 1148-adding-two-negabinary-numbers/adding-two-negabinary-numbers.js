
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;

    let carry = 0;
    const result = [];

    while (i >= 0 || j >= 0 || carry !== 0) {
        let sum = carry;

        if (i >= 0) sum += arr1[i--];
        if (j >= 0) sum += arr2[j--];

        let bit = ((sum % 2) + 2) % 2;

        carry = (sum - bit) / -2;

        result.push(bit);
    }

    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse();
};
