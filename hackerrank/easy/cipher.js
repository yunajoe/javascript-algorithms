function caesarCipher(s, k) {
  // Write your code here
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const copyString = s;
  const arr = copyString.split("");
  arr.forEach((str) => {
    const isUpperCase = str === str.toUpperCase();
    let lowerStr = str.toLowerCase();
    let currentIndex = alphabet.indexOf(lowerStr);
    if (currentIndex !== -1) {
      let move = currentIndex + k;
      if (move > 25) {
        let newIndex = move - 26;
        if (isUpperCase) {
          answer += alphabet[newIndex].toUpperCase();
        } else {
          answer += alphabet[newIndex];
        }
      } else {
        if (isUpperCase) {
          answer += alphabet[move].toUpperCase();
        } else {
          answer += alphabet[move];
        }
      }
    } else {
      answer += str;
    }
  });

  return answer;
}
