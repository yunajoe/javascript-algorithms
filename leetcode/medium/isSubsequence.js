/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  let IndexArr = [];
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      IndexArr.push(tIndex);
      sIndex++;
      tIndex++;
    } else {
      tIndex++;
    }
  }

  if (IndexArr.length < s.length) return false;
  return true;
};

// sol2
var isSubsequence = function (s, t) {
  let sIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) {
      sIndex++;
    }
  }
  return sIndex === s.length;
};
