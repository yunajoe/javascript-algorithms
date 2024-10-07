function dynamicArray(n, queries) {
  // Write your code here
  let lastValue = 0;

  const arr = [];
  const answersArr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < queries.length; i++) {
    const [query, x, y] = queries[i];
    let index = x ^ lastValue % n;
    if (query === 1) {
      arr[index].push(y);
    }
    if (query === 2) {
      let value = arr[index][y % arr[index].length];
      lastValue = value;
      answersArr.push(lastValue);
    }
  }
  return answersArr;
}
