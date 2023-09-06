function bracesValid(str) {
    const stack = [];
    const openBrackets = "([{";
    const closeBrackets = ")]}";
  
    for (let char of str) {
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        const lastOpenBracket = stack.pop();
        if (!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  console.log(bracesValid(str1))
  console.log(bracesValid(str2))
  console.log(bracesValid(str3))