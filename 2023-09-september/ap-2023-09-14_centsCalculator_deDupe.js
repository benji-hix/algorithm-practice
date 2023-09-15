/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


function fewestCoinChange(cents) {
    const change = {
        'quarter' : 25,
        'dime' : 10,
        'nickel' : 5,
        'penny' : 1
    }

    let answer = {}

    for (a in change) {
        while (change[a] <= cents) {
            cents -= change[a]
            answer.hasOwnProperty(a) ? answer[a]++ : answer[a] = 1;
        }
    }  

    return answer
}

Object.entries(fewestCoinChange(cents4))
Object.entries(expected4)

/*****************************************************************************/


/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
*/

const nums1 = [1, 1, 1, 1];
const expectedA = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expectedB = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expectedC = [1, 2, 3, 4];

const nums4 = [1, 1];
const expectedD = [1];


function dedupeSorted(nums) {
    newArr = []
    dict = {}

    for (let i = 0; i < nums.length; i++) {
        if (!dict.hasOwnProperty(nums[i])) {
            newArr.push(nums[i])
            dict[nums[i]] = 1
        }
    }
    return newArr
}

console.log(dedupeSorted(nums1))
console.log(expectedA)
console.log(dedupeSorted(nums2))
console.log(expectedB)
console.log(dedupeSorted(nums3))
console.log(expectedC)
console.log(dedupeSorted(nums4))
console.log(expectedD)
/*****************************************************************************/

