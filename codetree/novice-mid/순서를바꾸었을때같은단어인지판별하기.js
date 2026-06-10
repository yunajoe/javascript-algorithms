function judgeCalculate(str1, str2) {
  if (str1.length !== str2.length) return "No";
  const str1Arr = [...str1].sort((a, b) => (a > b ? 1 : -1));
  const str2Arr = [...str2].sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) return "No";
  }
  return "Yes";
}

// solution2
function judgeCalculateTwo(str1, str2) {
  if (str1.length !== str2.length) return "No";

  const count = Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    count[str1[i].charCodeAt(0) - 97]++;
    count[str2[i].charCodeAt(0) - 97]--;
  }
  return count.filter(Boolean).length === 0 ? "Yes" : "No";
}
