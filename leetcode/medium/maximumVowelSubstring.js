/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//  s문자열의 substring 중 최대 모음의 갯수
var maxVowels = function (s, k) {
  let idx = 0;
  let MaxCnt = 0;
  let cnt = 0;
  const vowelArr = ["a", "i", "e", "o", "u"];
  while (idx <= s.length - k) {
    for (let i = idx; i < idx + k; i++) {
      let str = s.charAt(i);
      if (vowelArr.includes(str)) {
        cnt++;
      }
    }
    if (cnt >= MaxCnt) {
      MaxCnt = cnt;
    }
    cnt = 0;
    idx++;
  }
  return MaxCnt;
};
