function gridChallenge(grid) {
  // Write your code here
  const newGrid = [];
  grid.forEach((str) => {
    const ascendingStr = sortAscending(str);
    newGrid.push(ascendingStr);
  });
  let maxLength = newGrid[newGrid.length - 1].length;
  let startIndex = 0;

  while (startIndex !== maxLength) {
    const newStr = newGrid.reduce((acc, str, idx) => {
      let value = str[startIndex];
      acc += value;
      return acc;
    }, "");
    const result = isAscending(newStr);
    if (!result) {
      return "NO";
    }
    startIndex++;
  }
  return "YES";
}

const isAscending = (str) => {
  const sortedStr = sortAscending(str);
  if (sortedStr === str) {
    return true;
  }
  return false;
};

const sortAscending = (str) => {
  return str
    .split("")
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    })
    .join("");
};
