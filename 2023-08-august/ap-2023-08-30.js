/* 
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";

  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  const str5 = "aaaabbcdddaaa";
  const expected5_bonus = "a4b2c1d3a3";
  const expected5 = "a7b2c1d3";

function encodeStr(str) {
    // start with a split array; we plan on adding to an array, then joining later 
    // sort to account for unalphabetized strings 
    let encodedArr = [];
    str = str.split('');
    // we loop through every element of array AKA every letter in string
    for (i = 0; i < str.length; i++) {
        // if the character we encounter ISN'T already in our new array, we add it
        // and set its count to 1
        if (str[i] != str[i-1]) {
            encodedArr.push(str[i]);
            encodedArr.push(1);
        }
        // if the character IS already in our new array, we locate its counter and add 1
        else {
            encodedArr[encodedArr.length-1] += 1;
        }
    }
    // join answer array into string 
    let encodedStr = encodedArr.join('');
    return encodedStr;
    
}

console.log(encodeStr(str1) + " should be " + expected1)
console.log(encodeStr(str2) + " should be " + expected2)
console.log(encodeStr(str3) + " should be " + expected3)
console.log(encodeStr(str4) + " should be " + expected4)
console.log(encodeStr(str5) + " should be " + expected5)
/*****************************************************************************/


/* 
  String Decode 
  given a string of characters followed by integers, return a new string of each character repeated
  as many times as its subsequent integer from the original string.
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";


function decodeStr(str) {

    // create a str variable for final answer and an arr variable for working through the parameter str
    let decodedStr = ""
    let arrayStr = []
    
    // start by converting str to an array of individual characters followed by integers
    let i = 0;
    while (i < str.length) {
      // if character is a str, push it to array and move on
      if (isNaN(str[i])) {
        arrayStr.push(str[i]);
        i++;
      }
      //if character is numeric, join it with subsequent numeric characters then push to array
      else {
        let joinedNumber = ""
        let j = 0;
        while (isNaN(str[i + j]) == false) {
            joinedNumber += str[i + j];
            j++;
        }
        arrayStr.push(+joinedNumber)
        i = i + j;
     }
    }

    // iterate through the array and push each individual character  a number of times
    // equal to its subsequent integer 
    for (i = 0; i < arrayStr.length; i += 2) { // note the 2 because we only want to act on characters, not integers
      while (arrayStr[i + 1] > 0) {
        decodedStr += arrayStr[i];
        arrayStr[i + 1]--;
      }
    } 
    
    return decodedStr;
}

console.log(decodeStr(str1) + " should be " + expected1)
console.log(decodeStr(str2) + " should be " + expected2)

