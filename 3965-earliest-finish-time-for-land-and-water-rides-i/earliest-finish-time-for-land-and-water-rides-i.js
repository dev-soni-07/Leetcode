/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            let finishLand = landStartTime[i] + landDuration[i];
            let startWater = Math.max(finishLand, waterStartTime[j]);
            let finish1 = startWater + waterDuration[j];

            let finishWater = waterStartTime[j] + waterDuration[j];
            let startLand = Math.max(finishWater, landStartTime[i]);
            let finish2 = startLand + landDuration[i];

            ans = Math.min(ans, finish1, finish2);
        }
    }
    return ans;
};
