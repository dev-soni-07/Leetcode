/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    heaters.sort((a, b) => a - b)
    let ans = 0

    for (let house of houses) {
        let left = 0
        let right = heaters.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (heaters[mid] < house) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        let dist1 = left < heaters.length ? Math.abs(heaters[left] - house) : Infinity
        let dist2 = right >= 0 ? Math.abs(heaters[right] - house) : Infinity

        let closest = Math.min(dist1, dist2)
        ans = Math.max(ans, closest)
    }

    return ans
}