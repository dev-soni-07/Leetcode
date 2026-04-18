/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = new Map();
    for (let emp of employees) {
        map.set(emp.id, emp);
    }

    let total = 0;
    const queue = [id];

    while (queue.length > 0) {
        const currId = queue.shift();
        const emp = map.get(currId);

        total += emp.importance;

        for (let sub of emp.subordinates) {
            queue.push(sub);
        }
    }

    return total;
};