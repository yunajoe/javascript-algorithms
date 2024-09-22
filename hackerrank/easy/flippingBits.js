const convertDicimal = (binaryNum) => {
  let strBinary = String(binaryNum); // 31
  let stringLeng = strBinary.length;
  let sum = 0;
  for (let i = 0; i < strBinary.length; i++) {
    let num = 2 ** (stringLeng - (i + 1));
    sum += binaryNum[i] * num;
  }
  return sum;
};

const fill32Bits = (n) => {
  const fillArr = Array.from({ length: 32 }).fill(0);

  n.split("").forEach((num, index) => {
    fillArr[31 - index] = num;
  });
  const result = fillArr.map((num) => {
    if (typeof num === "string") {
      return Number(num);
    }
    return num;
  });

  result.forEach((num, index) => {
    if (num === 0) {
      result[index] = 1;
    }
    if (num === 1) {
      result[index] = 0;
    }
  });
  return result.join("");
};
const covertBinary = (n) => {
  if (n === 0) return "0";
  if (n === 1) return "1";

  let binaryNum = "";
  for (let i = 1; i <= 32; i++) {
    if (2 ** i == n) {
      binaryNum = "1" + "0".repeat(i);
      return binaryNum;
    }
  }

  let answer = [];
  let copyN = n;
  let nthPower = 32;
  while (copyN !== 0) {
    if (2 ** nthPower <= copyN) {
      copyN = copyN - 2 ** nthPower; // 28
      answer.push(nthPower);
    }
    nthPower--;
  }

  let arrNum = answer[0];
  let biteArr = Array.from({ length: arrNum + 1 }).fill(0);

  answer.forEach((num) => {
    biteArr[arrNum - num] = 1;
  });
  return biteArr.join("");
};

function flippingBits(n) {
  // Write your code here
  const binaryNum = covertBinary(n);
  const ThreeTwoBinaryDigit = fill32Bits(binaryNum);
  const answer = convertDicimal(ThreeTwoBinaryDigit);
  return answer;
}
