/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].
    */

//    example 1
    const arr1 = [2, 11, 7, 15]
    const target1 = 9
    const expected1 = [0,2]

//    example 2
    const arr2 = [3,2,4]
    const target2 = 6
    const expected2 = [1,2]

//    example 3
    const arr3 = [3,3]
    const target3 = 6
    const expected3 = [0,1]

function twoSum (array, target) {
    const hashTable = {}

    for (let i = 0; i < array.length; i++) {
        if (hashTable.hasOwnProperty(array[i])) {
            return [hashTable[array[i]], i]
        }
        //* use target - array[i] to calculate the 'complement' number to search for
        //* store the complement as a key, current index as value
        //* that way, if we find the complement, we can immediately return it and have access
        //* to the original index we need to return 
        hashTable[(target - array[i])] = i;
    }
}

console.log(twoSum(arr1, target1) + ' should be ' + expected1)
console.log(twoSum(arr2, target2) + ' should be ' + expected2)
console.log(twoSum(arr3, target3) + ' should be ' + expected3)