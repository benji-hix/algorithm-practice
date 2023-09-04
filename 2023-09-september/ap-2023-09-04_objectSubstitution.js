function alphabetPosition(text) {
    let finalText = []

    const alphabet = {
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5',
        'f': '6',
        'g': '7',
        'h': '8',
        'i': '9',
        'j': '10',
        'k': '11',
        'l': '12',
        'm': '13',
        'n': '14',
        'o': '15',
        'p': '16',
        'q': '17',
        'r': '18',
        's': '19',
        't': '20',
        'u': '21',
        'v': '22',
        'w': '23',
        'x': '24',
        'y': '25',
        'z': '26'
    }

    text = text.toLowerCase()

    for (const char in text) {
        console.log(text[char]);
        if (alphabet[text[char]]) {
            finalText.push(alphabet[text[char]])
        }
    }

    finalText = finalText.join(' ')
    return finalText

}

console.log(alphabetPosition("The sunset sets at twelve o'clock."))
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
console.log(alphabetPosition("The narwhal bacons at midnight"))
console.log("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")

// solution utilizing character code

function alphabetPosition(text) {
    finalText = ''
    for (i = 0; i < text.length; i++) {
        charCode = text.toUpperCase().charCodeAt(i);
        (charCode < 91 && charCode > 64) ? finalText += (charCode - 64) + " " : null
    }
    return finalText
}

console.log(alphabetPosition("The sunset sets at twelve o'clock."))
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
console.log(alphabetPosition("The narwhal bacons at midnight"))
console.log("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")

// algo 2
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConcat(strarr, k) {
    let longestConcatStr = '' 
    if (strarr.length == 0 || k > strarr.length || k <= 0) return longestConcatStr;
    for (let i = 0; i < k; i++) {
        longestConcatStr += strarr[i]
    }

    for (i = 0; i < strarr.length; i++) {
        if (i + k >= strarr.length - 1)  break;
        testConcat = ''
        for (j = 0; j < k; j++) {
            testConcat += strarr[i + j]
        }
        if (testConcat.length > longestConcatStr.length) longestConcatStr = testConcat;
    }

    return longestConcatStr
}


strarr1 = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
k1 = 2
console.log(longestConcat(strarr1, k1))

strarr2 = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]
k2 = 2
console.log(longestConcat(strarr2, k2))
