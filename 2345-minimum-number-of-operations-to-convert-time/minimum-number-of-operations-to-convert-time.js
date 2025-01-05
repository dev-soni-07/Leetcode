/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const currentMinutes = timeToMinutes(current);
    const correctMinutes = timeToMinutes(correct);

    let diff = correctMinutes - currentMinutes;
    let operations = 0;

    const increments = [60, 15, 5, 1];
    for (const increment of increments) {
        operations += Math.floor(diff / increment);
        diff %= increment;
    }

    return operations;
};