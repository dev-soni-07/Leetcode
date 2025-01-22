/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function convertToDayOfYear(date) {
        const [month, day] = date.split('-').map(Number);
        let dayOfYear = day;
        for (let i = 0; i < month - 1; i++) {
            dayOfYear += daysInMonth[i];
        }
        return dayOfYear;
    }

    const arriveAliceDay = convertToDayOfYear(arriveAlice);
    const leaveAliceDay = convertToDayOfYear(leaveAlice);
    const arriveBobDay = convertToDayOfYear(arriveBob);
    const leaveBobDay = convertToDayOfYear(leaveBob);

    const startOverlap = Math.max(arriveAliceDay, arriveBobDay);
    const endOverlap = Math.min(leaveAliceDay, leaveBobDay);

    return Math.max(0, endOverlap - startOverlap + 1);
};