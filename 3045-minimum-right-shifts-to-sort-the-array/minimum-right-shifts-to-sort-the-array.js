var minimumRightShifts = function(nums) {
    let n = nums.length;
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            count++;
            if (count > 1) return -1;
            if (nums[n - 1] > nums[0]) return -1;
        }
    }

    if (count === 0) return 0;

    let idx = nums.findIndex((num, i, arr) => i > 0 && num < arr[i - 1]);
    return n - idx;
};
