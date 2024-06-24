/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result = [], alice = [], bob = [];
    nums.sort((a, b) => a - b);
    let turn = "Alice";

    for (let i = 0; i < nums.length; i++) {
        if (turn === "Alice") {
            alice.push(nums[i]);
            turn = "Bob";
            continue;
        }
        if (turn === "Bob") {
            bob.push(nums[i]);
            turn = "Alice";
            continue;
        }
    }

    for (let i = 0; i < alice.length; i++) {
        result.push(bob[i]);
        result.push(alice[i]);
    }
    return result;
};