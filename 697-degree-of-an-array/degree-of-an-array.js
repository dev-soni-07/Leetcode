/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let shortestSubArrayLength = 0, degreeObject = {};

    for (let i = 0; i < nums.length; i++) {
        if (degreeObject[nums[i]]) {
            degreeObject[nums[i]] += 1;
        } else {
            degreeObject[nums[i]] = 1;
        }
    }

    let degree = Math.max(...Object.values(degreeObject));

    let degreeArray = Object.keys(degreeObject).filter(key => degreeObject[key] === degree);

    for (let i = 0; i < degreeArray.length; i++) {
        let firstIndex = nums.indexOf(parseInt(degreeArray[i]));
        let lastIndex = nums.lastIndexOf(parseInt(degreeArray[i]));
        let subArrayLength = lastIndex - firstIndex + 1;
        if (shortestSubArrayLength === 0 || subArrayLength < shortestSubArrayLength) {
            shortestSubArrayLength = subArrayLength;
        }
    }

    return shortestSubArrayLength;
};