/*Create a function taking a positive integer between 1 and 3999 (both included) as 
its parameter and returning a string containing the Roman Numeral representation of that integer.
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/
function solution(number) {
    var romanNumeral = ''
    const digitsReverse = [0, 0, 0, 0];
    let temp = String(number).split('').reverse();
    for (i = 0; i < 4; i++) {
        digitsReverse[i] = temp[i];
    }
    console.log(digitsReverse);

    // code for 1st digit
    switch (digitsReverse[3]) {
        case (undefined):
        case ('0'): break;
        default: {
            for (i = 1; i <= digitsReverse[3]; i += 1) {
            romanNumeral += "M";
            }
            break;
        }
    }

    // code for 2nd digit
    switch (digitsReverse[2]) {
        case (undefined):
        case ('0'): break;
        case ('4'): { romanNumeral += "CD";
            break;
        }
        case ('9'): { romanNumeral += "CM";
            break;
        }
        case ('5'): {
            romanNumeral += "D";
            break;
        }
        default: {
            if (digitsReverse[2] > 5) romanNumeral += "D";
            digitsReverse[2] = digitsReverse[2] % 5;
            for (i = 1; i <= digitsReverse[2]; i += 1) {
            romanNumeral += "C";
            }
            break;
        }
    }

    // code for 3rd digit
    switch (digitsReverse[1]) {
        case (undefined):
        case ('0'): break;
        case ('4'): { romanNumeral += "XL";
            break;
        }
        case ('9'): { romanNumeral += "XC";
            break;
        }
        case ('5'): {
            romanNumeral += "L";
            break;
        }
        default: {
            if (digitsReverse[1] > 5) romanNumeral += "L";
            digitsReverse[1] = digitsReverse[1] % 5;
            for (i = 1; i <= digitsReverse[1]; i += 1) {
            romanNumeral += "X";
            }
            break;
        }
    }

    // code for 4th digit
    switch (digitsReverse[0]) {
        case ('0'): break;
        case ('4'): { romanNumeral += "IV";
            break;
        }
        case ('9'): { romanNumeral += "IX";
            break;
        }
        case ('5'): {
            romanNumeral += "V";
            break;
        }
        default: {
            if (digitsReverse[0] > 5) romanNumeral += 'V';
            digitsReverse[0] = digitsReverse[0] % 5;
            for (i = 1; i <= digitsReverse[0]; i += 1) {
            romanNumeral += "I";
            }
            break;
        }
    }


    return romanNumeral;
}



// intended solution -- significantly more concise/
// utilizing looping through an object 
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}
console.log(solution(1444));






function benjiNumeral(number) {
var benjiNumerals = {
    a: 30,
    ba: 27,
    b: 3,
    ca: 29,
    c: 1
}

var answerBenji = "";

while (number > 0) {
    for (character in benjiNumerals) {
        if (benjiNumerals[character] <= number) {
            answerBenji += character;
            number -= answerBenji[character];
            break;
        }
    }
}
return answerBenji;
}

console.log(benjiNumeral(52));