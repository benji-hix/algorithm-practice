/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

    
function isAnagram(s1, s2) {
    return (s1.toLowerCase().split('').sort().join('') == s2.toLowerCase().split('').sort().join('')) ? true : false
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))

function count(string) {
    let characterCount = {};
    string.split('').forEach(function(char){
        
    for (let i = 0; i < string.length; i++) {
        if (characterCount.hasOwnProperty(string[i])) 
        characterCount[string[i]]++;
        else characterCount[string[i]] = 1;
        }
    })
    
    return characterCount;
    }

function isAnagram2(callback, str1, str2) {

    str1 = callback(str1.toLowerCase())
    str2 = callback(str2.toLowerCase())
    const keys1 = Object.keys(str1)
    const keys2 = Object.keys(str2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (str1[key] !== str2[key]) {
            return false
        }
    }

    return true
}

console.log(isAnagram2(count, strA1, strB1))
console.log(isAnagram2(count, strA2, strB2))
console.log(isAnagram2(count, strA3, strB3))
console.log(isAnagram2(count, strA4, strB4))

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const strA = "   hello world     ";
const expectedA = "hello world";

function trim(str) {
        let start = 0
        let end = str.length - 1
    
        while(str[start] === ' '){
            start++
        }
        while(str[end] === ' '){
            end--
        }
        let result = ""
        for(let i=start; i<=end; i++){
            result += str[i]
        }
        return result
}

/*****************************************************************************/