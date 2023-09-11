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
    //* start at the first 1 in the array
    start = queue.indexOf(1);
    let count = 0

    //* loop through array
    for (let i = start + 1; i < queue.length; i++) {
        //* count up by 1 when encountering a 0
        if (queue[i] == 0) count++;
        //* return false if encountering a 1 before 6 0s
        else if (count < 6) return false;
        //* reset count if 
        else count = 0;
        }

    //* default to returning true for empty arrays or trailing 0s 
    return true
}

console.log(socialDistancingEnforcer(queue1))
console.log(expected1)
console.log(socialDistancingEnforcer(queue2))
console.log(expected2)
console.log(socialDistancingEnforcer(queue3))
console.log(expected3)
console.log(socialDistancingEnforcer(queue4))
console.log(expected4)