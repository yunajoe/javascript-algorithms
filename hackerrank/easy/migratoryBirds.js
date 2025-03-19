const findkeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const birdTypeObject = {
  1: "Type1",
  2: "Type2",
  3: "Type3",
  4: "Type4",
  5: "Type5",
};

const calculateBirdType = (birdTypeObject, birdType, map) => {
  let cnt = map.get(birdTypeObject[birdType]);
  cnt++;
  map.set(birdTypeObject[birdType], cnt);
};

function migratoryBirds(arr) {
  // Write your code here
  const map = new Map();
  map.set("Type1", 0);
  map.set("Type2", 0);
  map.set("Type3", 0);
  map.set("Type4", 0);
  map.set("Type5", 0);

  for (let i = 0; i < arr.length; i++) {
    let birdType = arr[i];
    calculateBirdType(birdTypeObject, birdType, map);
  }

  const maxValue = Math.max(...Array.from(map.values()));
  for (const [key, value] of map.entries()) {
    if (value === maxValue) {
      return findkeyByValue(birdTypeObject, key);
    }
  }
}
