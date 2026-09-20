const fs = require("fs");
const bracketStr = fs.readFileSync(0, "utf-8").trim();

function checkBracket(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      // 스택이 비어있는데 닫힌 괄호가 들어온 경우
      if (stack.length === 0) return "No";
      stack.pop();
    }
  }
  return stack.length === 0 ? "Yes" : "No";
}

console.log(checkBracket(bracketStr));
