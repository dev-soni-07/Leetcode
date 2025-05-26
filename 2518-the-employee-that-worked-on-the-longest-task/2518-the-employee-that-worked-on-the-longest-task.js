/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let maxDuration = 0;
    let employeeId = logs[0][0];
    let prevTime = 0;

    for (let i = 0; i < logs.length; i++) {
        const [id, leaveTime] = logs[i];
        const duration = leaveTime - prevTime;
        if (
            duration > maxDuration ||
            (duration === maxDuration && id < employeeId)
        ) {
            maxDuration = duration;
            employeeId = id;
        }
        prevTime = leaveTime;
    }
    return employeeId;
};