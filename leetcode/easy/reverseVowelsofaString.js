var reverseVowels = function (s) {
  const answerS = s.split("").slice();
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const result = s
    .split("")
    .map((letter, idx) => {
      let indexLoc = vowels.indexOf(letter);
      if (indexLoc !== -1) {
        return [letter, idx];
      }
    })
    .filter((value) => value);

  const copyResult = [...result];
  let reverseStr = "";
  while (result.length > 0) {
    let ele = result.pop();
    const [letter, _] = ele;
    reverseStr += letter;
  }

  for (let i = 0; i < reverseStr.length; i++) {
    copyResult[i][0] = reverseStr[i];
  }

  while (copyResult.length > 0) {
    const ele = copyResult.shift();
    const [letter, idx] = ele;
    answerS[idx] = letter;
  }
  return answerS.join("");
};

// sol2)

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let splitWord = s.split("");

  // left와 right둘다 모두 모음일때까지 ...찾자!
  // 즉, left쪽에서 vowel이 아니면은 ++, right쪽에서 vowel아니면은 -- 를 한다..

  while (leftIndex < rightIndex) {
    if (!vowels.includes(splitWord[leftIndex])) {
      leftIndex++;
    } else if (!vowels.includes(splitWord[rightIndex])) {
      rightIndex--;
    } else {
      // 둘다 모음일때!
      [splitWord[leftIndex], splitWord[rightIndex]] = [
        splitWord[rightIndex],
        splitWord[leftIndex],
      ];

      leftIndex++;
      rightIndex--;
    }
  }

  return splitWord.join("");
};
