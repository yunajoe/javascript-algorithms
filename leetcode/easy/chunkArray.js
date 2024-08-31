/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];

  if (size >= arr.length) return Array.from(Array(arr));

  const answer = [];
  let cnt = 0;
  let subArray = Array.from({ length: size });
  arr.forEach((num, idx) => {
    let isDone = subArray.filter((value) => value === 0 || value);
    if (isDone.length === size) {
      answer.push(isDone);
      subArray = Array.from({ length: size });
      cnt = 0;
    }
    subArray.fill(num, cnt, cnt + 1);
    cnt++;
    if (idx === arr.length - 1) {
      let isDone = subArray.filter((value) => value);
      answer.push(Array.from(isDone));
    }
  });
  return answer;
};
