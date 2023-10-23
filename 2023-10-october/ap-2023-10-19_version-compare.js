/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;


const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */

function compareString(str1, str2) {
    if (parseFloat(str1) > parseFloat(str2)) {
        return 1
    }
    else if (parseFloat(str1) < parseFloat(str2)) {
        return -1
    }
    else return 0;
}

function compareVersionNumbers(v1, v2) {
    let temp1 = ''
    let temp2 = ''

    let i = 0, j = 0;
    while (i < v1.length || j < v2.length) {
        //* when both i and j land on a period, compare preceding digits
        if ((v1[i] == '.' || i == v1.length -1) && (v2[j] == '.' || j == v2.length-1)) {
            if (compareString(temp1, temp2) != 0) {
                return compareString(temp1, temp2)
            } else {
                temp1 = ''
                temp2 = ''
                i++
                j++
            }
        }
        //* if not on a period, add numbers to temp strings to compare
        if (v1[i] != '.') {
            temp1 += v1[i]
            i++
        }
        if (v2[j] != '.') {
            temp2 += v2[j]
            j++
        }
    }
    //* compare final digit if strings are different length
    if (compareString(temp1, temp2) != 0) {
        return compareString(temp1, temp2)
    }

    //*
    if (v1.length > v2.length) return 1;
    else if (v1.length < v2.length) return -1;
    else return 0
}

// console.log(compareVersionNumbers(test1V1, test1V2))
// console.log(compareVersionNumbers(test2V1, test2V2))
// console.log(compareVersionNumbers(test3V1, test3V2))
// console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))
// console.log(compareVersionNumbers(test6V1, test6V2))