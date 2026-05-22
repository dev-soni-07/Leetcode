/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];

    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }

    jobs.sort((a, b) => a[0] - b[0]);

    worker.sort((a, b) => a - b);

    let totalProfit = 0;
    let bestProfit = 0;
    let j = 0;

    for (let ability of worker) {
        while (j < jobs.length && jobs[j][0] <= ability) {
            bestProfit = Math.max(bestProfit, jobs[j][1]);
            j++;
        }

        totalProfit += bestProfit;
    }

    return totalProfit;
};