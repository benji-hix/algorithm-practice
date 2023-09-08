/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

// BONUS: 
// What happens if we rotate it a billion times? Is there a fast way to do that?

/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/


function rotateStr(str, amnt) {

    if (amnt > str.length) {
        amnt %= str.length;
    }
    str = str.split('')
    for (let j = 0; j < amnt; j++) {
        temp = str[str.length-1]
        for (let i = str.length - 1; i > 0; i--) {
            str[i] = str[i-1]
        }
        str[0] = temp
    }
    return str.join('')
}

function rotateStr(str, amnt) {
    let s = '';
    amnt %= str.length;

    for (let i = 0; i < str.length; i++) {
        s += str[(str.length - amnt + i) % str.length];
    }
    return s;
}


console.log(rotateStr(str, 2))
/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;


function isRotation(s1, s2) {
    if (s1.length != s2.length) return false;

    s1 = s1.split('');


    let j = 0;
    while (j < s1.length) {
        temp = s1[s1.length-1];
        for (let i = s1.length - 1; i > 0; i--) {
            s1[i] = s1[i-1]
        }
        s1[0] = temp;
        if (s1.join('') == s2) return true;
        j++;
    }

    return false;
}

console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))
console.log(isRotation(strA3, strB3))