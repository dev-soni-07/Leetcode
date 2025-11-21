/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    let best = Infinity;

    for (const [val, idxs] of map) {
        if (idxs.length < 3) continue;

        for (let i = 0; i < idxs.length; i++) {
            for (let j = i + 1; j < idxs.length; j++) {
                for (let k = j + 1; k < idxs.length; k++) {
                    const a = idxs[i], b = idxs[j], c = idxs[k];
                    const dist = Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a);
                    if (dist < best) best = dist;
                }
            }
        }
    }

    return best === Infinity ? -1 : best;
};
