// algorithm 1
/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 */
var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

function combineSmallerStringFirst(smallerStringA1, smallerStringB1) {
    var combinedString = ""
    
    if (smallerStringA1.length <= smallerStringB1.length) {
        combinedString = smallerStringA1 + " "  + smallerStringB1;
    }
    else {
        combinedString = smallerStringB1 + " " + smallerStringA1;
    }

    return combinedString;
}

console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1));





// algo 2
/*
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 */

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

function stringRepeat(stringToRepeat, numberToRepeat) {
    var repeatedString = ""

    for (var i = 1; i <= numberToRepeat; i++) {
        repeatedString += stringToRepeat + " ";
    }
    
    return repeatedString;
}

console.log(stringRepeat(stringToRepeat1, numberToRepeat1));





// algorithm 3
/**
 * Finds the longest word in the given array of words.
 * If there are multiple words with the same
 * length, this should be the last word in the array with that length.
 */
var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael'];

function findLongestWord(wordArray) {

    var longestWord = wordArray[0];

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length> longestWord.length) {
            longestWord = wordArray[i]
        }
    }

    return longestWord;
}

console.log(findLongestWord(wordArray));





// algo 4 (bonus)
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
*/

var rangeA1 = 10;
var rangeB1 = 15;


function inclusiveRangeSum (rangeA1, rangeB1) {
    
    var sum = 0;

    for (var i = rangeA1; i <= rangeB1; i++) {
        sum += i;
    }

    return sum;
}

console.log(inclusiveRangeSum(rangeA1, rangeB1));