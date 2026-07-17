/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const n = nums.length;

    function heapify(i, size) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < size && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < size && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            heapify(largest, size);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapify(0, i);
    }

    return nums;
};