/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let unableToEat = 0;

    while (students.length > 0 && unableToEat < students.length){
        if (students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            unableToEat = 0;
        } else {
            students.push(students.shift());
            unableToEat++;
        }
    }

    return unableToEat;
};