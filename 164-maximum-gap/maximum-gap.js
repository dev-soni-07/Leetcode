/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    if (minVal === maxVal) return 0;

    const n = nums.length;
    const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
    const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

    const buckets = Array.from({ length: bucketCount }, () => ({
        min: Infinity,
        max: -Infinity
    }));

    for (let num of nums) {
        const idx = Math.floor((num - minVal) / bucketSize);
        buckets[idx].min = Math.min(buckets[idx].min, num);
        buckets[idx].max = Math.max(buckets[idx].max, num);
    }

    let maxGap = 0;
    let prevMax = minVal;

    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue;
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
};
