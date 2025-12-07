const SCORE_MAP = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const LETTER_OBJECT_MAP = Object.fromEntries(
  Object.entries(SCORE_MAP).flatMap(([score, letters]) => {
    const mappingLetters = letters.map((letter) => [letter, score]);
    return mappingLetters;
  })
);

const getScore = (letter) => Number(LETTER_OBJECT_MAP[letter]) || 0;

export const score = (letters) => {
  return [...letters.toUpperCase()].reduce((sum, value) => {
    sum += getScore(value);
    return sum;
  }, 0);
};
