/**
 * 자열을 왼쪽에서 오른쪽으로 순서대로 읽으면서, )를 만났을 때 반드시 직전에 대기 중이던 (가 스택에 있어야 한다"**는 **시간적 순서(Sequence)**를 강제하는 용도로 스택을 사용하고 있는 것
 *
 */
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
