// algo 1

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

function reverseString(str) {
    strNew = "";
    for (i = str.length - 1; i >=0; i--) {
        strNew += str[i];
    }
    return strNew;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));