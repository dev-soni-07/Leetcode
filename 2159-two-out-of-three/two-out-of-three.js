/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);

    const countMap = new Map();

    const updateCount = (set) => {
        for (const num of set) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    };

    updateCount(set1);
    updateCount(set2);
    updateCount(set3);

    const result = [];
    for (const [num, count] of countMap.entries()) {
        if (count >= 2) {
            result.push(num);
        }
    }

    return result;
};