/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];


const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];


function interleaveArrays(arr1, arr2) {

    const iterator = Math.max(arr1.length, arr2.length)
    answer = []

    let i = 0;
    while (i < iterator) {
        if (arr1.includes(arr1[i])) answer.push(arr1[i]);
        if (arr2.includes(arr2[i])) answer.push(arr2[i]);
        i++
    }

    return answer
}

console.log(interleaveArrays(arrA1, arrB1) + ' should be ' + expected1)
console.log(interleaveArrays(arrA2, arrB2) + ' should be ' + expected2)
console.log(interleaveArrays(arrA3, arrB3) + ' should be ' + expected3)
console.log(interleaveArrays(arrA4, arrB4) + ' should be ' + expected4)

/*****************************************************************************/

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const numsA = [3, 5, 4, 3, 4, 6, 5, 7];
const expectedA = 6;

const numsB = [3, 5, 5];
const expectedB = 3;

const numsC = [3, 3, 5];
const expectedC = 5;

const numsD = [5];
const expectedD = 5;

const numsE = [];
const expectedE = null;

//~ solution with dictonary
function firstNonRepeated(nums) {
    
    //* create object that counts occurences of each element in array
    let object = {};
    for (var i = 0; i < nums.length; i++){
        if (nums[i] in object) object[nums[i]]++;
        else object[nums[i]] = 1;
    }

    //* loop through array again; if occurence count == 1, return 
    for (let j = 0; j < nums.length; j++){
        if (object[nums[j]] == 1) return nums[j];
    }

    //* default return null
    return null;
}

//~ solution with built-in methods .filter(), .lastIndexOf()
function firstNonRepeated(nums) {

    //* create an array of values where first index == last index AKA occur only once
    let uniqueNumbs = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))

    //* return first value in new array, default to null if array is is empty
    return (uniqueNumbs.length) ? uniqueNumbs[0] : null
}

console.log(firstNonRepeated(numsA) + ' should be ' + expectedA)
console.log(firstNonRepeated(numsB) + ' should be ' + expectedB)
console.log(firstNonRepeated(numsC) + ' should be ' + expectedC)
console.log(firstNonRepeated(numsD) + ' should be ' + expectedD)
console.log(firstNonRepeated(numsE) + ' should be ' + expectedE)

