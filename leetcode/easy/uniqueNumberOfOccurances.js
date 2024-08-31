/**
 * @param {number[]} arr
 * @return {boolean}
 */
//contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

var uniqueOccurrences = function (arr) {
  const map = new Map();
  for (let key of arr) {
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      let value = map.get(key);
      value++;
      map.set(key, value);
    }
  }
  //    console.log(map)
  const obj = Object.fromEntries(map);
  const values = Object.values(obj);
  const setValues = Array.from(new Set(values));
  return values.length === setValues.length && true;
};
