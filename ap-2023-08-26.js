// anagram detection

// return true if the two arguments given are anagarams, return false otherwise
// note anagrams are case insensitive

var isAnagram = function(test, original) {
var arrTest = test.toLowerCase().split('').sort().join('');
var arrOriginal = original.toLowerCase().split('').sort().join('');
return (arrTest == arrOriginal) ? true : false;

}

console.log(isAnagram('toffee', 'feetof'));