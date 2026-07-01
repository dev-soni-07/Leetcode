/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    let maxMinutes = -1;
    let ans = "";

    function backtrack(path, used) {
        if (path.length === 4) {
            const hour = path[0] * 10 + path[1];
            const minute = path[2] * 10 + path[3];

            if (hour < 24 && minute < 60) {
                const total = hour * 60 + minute;
                if (total > maxMinutes) {
                    maxMinutes = total;
                    ans =
                        String(path[0]) +
                        String(path[1]) +
                        ":" +
                        String(path[2]) +
                        String(path[3]);
                }
            }
            return;
        }

        for (let i = 0; i < 4; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(arr[i]);

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(4).fill(false));
    return ans;
};