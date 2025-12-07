const SCORE_MAP = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const LETTER_SCORE = Object.fromEntries(
  Object.entries(SCORE_MAP).flatMap(([score, letters]) =>
    letters.map((letter) => [letter, Number(score)])
  )
);

const returnScoreValue = (letter) => LETTER_SCORE[letter] || 0;

export const score = (letters) =>
  [...letters.toUpperCase()].reduce(
    (sum, char) => sum + returnScoreValue(char),
    0
  );

const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
