const handleString = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (i === str.length - 1 && str[i] === "$") {
      str = str.slice(0, -1);
    } else {
      str = str.replaceAll("$", " ");
    }
  }
  return str;
};
const transpose = (inputs) => {
  const arr = inputs.map((input) => input.split(""));
  const maxLength = Math.max(...arr.map((row) => row.length));
  const answerArr = [];
  for (let col = 0; col < maxLength; col++) {
    let str = "";
    for (let row = 0; row < arr.length; row++) {
      let value = arr[row][col];
      str += value ? value : "$";
    }
    answerArr.push(handleString(str));
  }
  return answerArr;
};
