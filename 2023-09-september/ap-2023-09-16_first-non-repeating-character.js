/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 

For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

function firstNonRepeatingLetter(s) {
    for (const char of s) {

        if  ( s.includes(char.toLowerCase()) && s.includes(char.toUpperCase()) )  {
            null
        }

        else if ((s.indexOf(char) == s.lastIndexOf(char.toLowerCase())) || (s.indexOf(char) == s.lastIndexOf(char.toUpperCase())) ) {
            return char
        }
    }
    return ''
}

console.log(firstNonRepeatingLetter('s,TreSS'))

