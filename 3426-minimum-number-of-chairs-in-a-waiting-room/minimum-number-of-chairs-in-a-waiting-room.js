/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let availableChairs = 0, peopleInWaitingRoom = 0;

    for (i = 0; i < s.length; i++) {
        if (s[i] === "E") {
            peopleInWaitingRoom++;
        } else if (s[i] === "L") {
            peopleInWaitingRoom--;
        }
        if (availableChairs < peopleInWaitingRoom) {
            availableChairs = peopleInWaitingRoom;
        }
    }

    return availableChairs;
};