// Algo 1: count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//function using forEach
function count(string) {
var characterCount = {};
string.split('').forEach(function(char){
    characterCount[char] ? characterCount[char]++ : characterCount[char] = 1;
});
return characterCount;
}


//function using for loop and .hasOwnProperty
function count(string) {
var characterCount = {};

string.split('').forEach(function(char){
const charactercount = {};
    
for (i = 0; i < string.length; i++) {
    if (characterCount.hasOwnProperty(string[i])) 
    characterCount[string[i]]++;
    else characterCount[string[i]] = 1;
    }
})
return characterCount;
}


