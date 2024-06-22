/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const func = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i]) && !result.includes(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

var findDifference = function(nums1, nums2) {
    let answer = [];
    answer.push(func(nums1, nums2), func(nums2, nums1));
    return answer;
};