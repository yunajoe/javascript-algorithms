function lonelyinteger(a) {
  const copyArr = [...a];
  const customSet = new Set(a);
  const uniqueArr = Array.from(customSet);
  while (uniqueArr.length > 0) {
    let value = uniqueArr.shift();
    const filteredArr = copyArr.filter((num) => num === value);
    if (filteredArr.length === 1) {
      return value;
    }
  }
}
