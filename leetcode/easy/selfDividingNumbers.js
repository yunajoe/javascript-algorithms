/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const arr = Array.from(
    { length: right - left + 1 },
    (_, index) => left + index,
  );
  const answer = arr.filter((num) => {
    const result = String(num)
      .split("")
      .every((value) => num % Number(value) === 0 && value !== "0");
    return result;
  });
  return answer;
};
