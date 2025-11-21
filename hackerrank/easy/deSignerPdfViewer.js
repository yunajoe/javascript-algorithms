const makeMapping = (arr) => {
  const map = new Map();
  lowerCaseAlphabets.forEach((letter, index) => {
    map.set(letter, arr[index]);
  });
  return map;
};

const getDimensions = (width, height) => {
  return width * height;
};

function designerPdfViewer(h, word) {
  let MAX_HEIGHT = -Infinity;
  const map = makeMapping(h);
  for (const char of word) {
    const numValue = map.get(char);
    if (numValue > MAX_HEIGHT) {
      MAX_HEIGHT = numValue;
    }
  }

  return getDimensions(MAX_HEIGHT, word.length);
}
