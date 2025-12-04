export const isPaired = (input) => {
  const stack = [];
  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (const char of input) {
    if (Object.values.includes(char)) {
      stack.push(char);
      continue;
    }

    if (pairs[char]) {
      const top = stack.pop();
      if (top !== pairs[char]) {
        return false;
      }
    }
  }
};
