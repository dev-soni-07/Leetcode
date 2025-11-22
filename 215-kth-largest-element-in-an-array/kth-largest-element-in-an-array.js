var findKthLargest = function(nums, k) {
    const target = nums.length - k;

    function quickSelect(left, right) {
        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivot = nums[pivotIndex];

        let lt = left;
        let i = left;
        let gt = right;

        while (i <= gt) {
            if (nums[i] < pivot) {
                [nums[i], nums[lt]] = [nums[lt], nums[i]];
                i++;
                lt++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[gt]] = [nums[gt], nums[i]];
                gt--;
            } else {
                i++;
            }
        }

        if (target < lt) return quickSelect(left, lt - 1);
        if (target > gt) return quickSelect(gt + 1, right);
        return nums[target];
    }

    return quickSelect(0, nums.length - 1);
};
