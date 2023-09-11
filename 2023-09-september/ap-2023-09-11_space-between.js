/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,

return whether or not there is at least 6 feet separating every person.

Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function socialDistancingEnforcer(queue) {
    let count = 0

    //* loop through array, starting after the first 1
    for (let i = queue.indexOf(1) + 1; i < queue.length; i++) {
        //* count every 0 encountered
        if (queue[i] == 0) count++;
        //* return false if encountering a 1 before six 0s
        else if (count < 6) return false;
        //* otherwise reset count and continue loop
        else count = 0;
        }

    //* default to returning true for empty arrays or trailing 0s 
    return true
}

console.log(socialDistancingEnforcer(queue1) + ' should be ' + expected1)
console.log(socialDistancingEnforcer(queue2) + ' should be ' + expected2)
console.log(socialDistancingEnforcer(queue3) + ' should be ' + expected3)
console.log(socialDistancingEnforcer(queue4) + ' should be ' + expected4)
