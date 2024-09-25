// time exceeded
function permutate(arr) {
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return arr;
  }

  const permutationList = [];
  for (let i = 0; i < arr.length; i++) {
    const startValue = arr[i];
    const part1 = arr.slice(0, i);
    const part2 = arr.slice(i + 1);
    const restArr = [...part1, ...part2];
    for (const element of permutate(restArr)) {
      permutationList.push(String(startValue) + element);
    }
  }

  return permutationList;
}

const convertArr = (arr) => {
  const NumberArr = arr.map((item) => Number(item));
  const nonDuplicatedArr = Array.from(new Set(NumberArr));
  return nonDuplicatedArr;
};

function twoArrays(k, A, B) {
  // Write your code here
  const copyA = [...A];
  const copyB = [...B];
  const result = permutate(copyA);
  const permutationList = result.map((item) => Number(item));
  const resultArr = convertArr(permutationList);
  let isSumCorrect = true;
  while (resultArr.length > 0) {
    isSumCorrect = true;
    const value = resultArr.shift();
    const strValue = String(value);
    for (let i = 0; i < strValue.length; i++) {
      let sum = copyB[i] + Number(strValue[i]);
      if (sum < k) {
        isSumCorrect = false;
        break;
      }
    }
    if (isSumCorrect) {
      break;
    }
  }

  if (isSumCorrect) {
    return "YES";
  }
  return "NO";
}
