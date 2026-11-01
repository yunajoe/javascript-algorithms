const getPrice = (diffNum) => {
  if (diffNum === 1) {
    return 800;
  } else if (diffNum === 2) {
    return 800 * 2 * (1 - 0.05);
  } else if (diffNum === 3) {
    return 800 * 3 * (1 - 0.1);
  } else if (diffNum === 4) {
    return 800 * 4 * (1 - 0.2);
  }
  return 800 * 5 * (1 - 0.25);
};

const getCount = (books) => {
  const result = Array.from({ length: 5 }).fill(0);
  books.forEach((num) => {
    result[num - 1] += 1;
  });
  return result;
};
const filterCountArr = (books) => {
  const filteredArr = books.filter((b) => b).sort((a, b) => b - a);
  return filteredArr;
};

const getMinCost = (counts) => {
  if (counts.length === 0) return 0;
  let minCost = Math.min(Number.POSITIVE_INFINITY);
  for (let i = 1; i <= counts.length; i++) {
    // 1. 앞에서부터 k개의 책에서 각각 1권씩 뺀다.
    const nextCounts = counts.map((count, index) =>
      index < i ? count - 1 : count,
    );
    const normalizedNext = filterCountArr(nextCounts);
    // 2. 책을 빼고 남은 수량으로 재귀 함수를 호출한다!
    const cost = getPrice(i) + getMinCost(normalizedNext);
    // 3. 그중 가장 최소 비용을 기억한다.
    minCost = Math.min(minCost, cost);
  }
  return minCost;
};

export const cost = (books) => {
  const getCountArr = getCount(books);
  const sortedArr = filterCountArr(getCountArr);
  return getMinCost(sortedArr);
};
