/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y3((p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.


function parensValid(str) {
    let test = 0


    for (const char in str) {
        if (test == 0 && str[char] == ')') {
            return false
        }
        else if (str[char] == '(') {
            test++
        }
        else if (str[char] == ')')
            test--
    }

    return (test == 0) ? true : false;

}

console.log(parensValid(str1))
console.log(expected1)
console.log(parensValid(str2))
console.log(expected2)
console.log(parensValid(str3))
console.log(expected3)
console.log(parensValid(str4))
console.log(expected4)
console.log(parensValid("this (is) a test"))
console.log('true')


/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const string1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expect1 = true;

const string2 = "D(i{a}l[ t]o)n{e";
const expect2 = false;

const string3 = "A(1)s[O (n]0{t) 0}k";
const expect3 = false;

const string4 = '() [] {}'
const expect4 = true;

function bracesValid(str) {
    let testStack = []
    const pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const end = [')', ']', '}']

    for (const char in str) {
    // add opening bracket to stack
    if (str[char] in pairs) {
    testStack.push(str[char]);
    }
    // if character is end bracket, pop most recent entry in stack
    else if (end.includes(str[char]) && 
    (testStack.length == 0) || (str[char] != pairs[testStack.pop()])){
        return false;
    }
    }

    return (testStack.length == 0)
}

console.log(bracesValid(string1))
console.log(expect1)
console.log(bracesValid(string2))
console.log(expect2)
console.log(bracesValid(string3))
console.log(expect3)
console.log(bracesValid(string4))
console.log(expect4)

/*****************************************************************************/
