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