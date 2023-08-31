/* -------------------------------------------------------------------------- */
/*                                   algo 1                                   */
/* -------------------------------------------------------------------------- */
/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;


function isPalindrome(str) {
    return (str == str.split('').reverse().join('')) ? true : false;
}
  
console.log(isPalindrome(str1) + " should be " + expected1)
console.log(isPalindrome(str2) + " should be " + expected2)
console.log(isPalindrome(str3) + " should be " + expected3)
console.log(isPalindrome(str4) + " should be " + expected4)


/* -------------------------------------------------------------------------- */
/*                                   algo 2                                   */
/* -------------------------------------------------------------------------- */

/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/


const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

function longestPalindromicSubstring(str) {
    let longestPalindromeArr = [str[0]]
    let longestPalindromeStr = ""

    str = str.split('')

    for (i = 1; i < str.length; i++) {
        // odd-number palindrome
        if ((str[i] != str[i+2]) && (str[i-1] == str[i+1])) {
            // console.log(i);
            var temp = [str[i]];
            let a = 1;
            let b = 1;
            while ((str[i - a] == str[i + b]) && (i-a > 0) && (i + b < str.length)) {
                temp.unshift(str[i-a]);
                temp.push(str[i + b]);
                a++;
                b++;
            }
            // console.log(a + ", " + b);
            (temp.length > longestPalindromeArr.length) ? longestPalindromeArr = temp : null;
        }
    // even palindrome
        if (str[i] == str[i+1] && str[i] != str[i-1]) {
            var temp2 = [str[i], str[i+1]];
            let x = 1
            let y = 2
        while (str[i-x] == str[i+y] && (i - x > 0) && (i + y < str.length - 1)) {
                temp2.unshift(str[i-x]);
                temp2.push(str[i + y]);
                x++;
                y++;
            }
            (temp2.length > longestPalindromeArr.length) ? longestPalindromeArr = temp2 : null;
            };
    }

    longestPalindromeStr = longestPalindromeArr.join('');
    return longestPalindromeStr

}

console.log(longestPalindromicSubstring(str1) + " should be " + expected1)
console.log(longestPalindromicSubstring(str2) + " should be " + expected2)
console.log(longestPalindromicSubstring(str3) + " should be " + expected3)
console.log(longestPalindromicSubstring(str4) + " should be " + expected4)
console.log(longestPalindromicSubstring(str5) + " should be " + expected5)


