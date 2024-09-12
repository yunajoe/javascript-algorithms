function matchingStrings(strings, queries) {
  // Write your code here
  const copyStrings = [...strings];
  const copyQueries = [...queries];
  let answer = [];
  while (copyQueries.length > 0) {
    const value = copyQueries.shift();
    const filteredArr = copyStrings.filter((str) => str === value);
    answer.push(filteredArr.length);
  }
  return answer;
}
