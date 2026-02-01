/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const n = nums.length;

    function nextIndex(i) {
        return ((i + nums[i]) % n + n) % n;
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;

        let slow = i;
        let fast = i;
        let dir = nums[i] > 0;

        while (true) {
            let nextSlow = nextIndex(slow);
            let nextFast = nextIndex(fast);
            let nextFast2 = nextIndex(nextFast);

            if (
                nums[nextSlow] === 0 ||
                nums[nextFast] === 0 ||
                nums[nextFast2] === 0 ||
                (nums[nextSlow] > 0) !== dir ||
                (nums[nextFast] > 0) !== dir ||
                (nums[nextFast2] > 0) !== dir
            ) {
                break;
            }

            slow = nextSlow;
            fast = nextFast2;

            if (slow === fast) {
                if (slow === nextIndex(slow)) break;
                return true;
            }
        }

        let j = i;
        while (nums[j] !== 0 && (nums[j] > 0) === dir) {
            let next = nextIndex(j);
            nums[j] = 0;
            j = next;
        }
    }

    return false;
};