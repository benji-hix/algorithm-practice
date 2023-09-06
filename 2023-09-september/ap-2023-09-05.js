/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";


const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba"

function stringDedupe(str) {
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) == -1) {
            newStr += str[i]
        }
    }
    return newStr
}


console.log(stringDedupe(str1));
console.log(expected1, "(expected)")
console.log(stringDedupe(str2));
console.log(expected2, "(expected)")
console.log(stringDedupe(str3));
console.log(expected3, "(expected)")
console.log(stringDedupe(str4));
console.log(expected4, "(expected)")
console.log(stringDedupe(str5));
console.log(expected5, "(expected)")




/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";


function reverseWords(str) {
    let newStr = ''

    str = str.split(' ');

    for (const word in str) {
        newStr += str[word].split('').reverse().join('') + " "
    }

    return newStr
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(expectedA, "(expected)")
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(expectedB, "(expected)")
console.log(reverseWords(strC)) //expectedC: cba fed ihg
console.log(expectedC, "(expected)")