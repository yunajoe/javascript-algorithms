const prime = (nth) => {
  if (nth === 0) throw new Error("there is no zeroth prime");
  if (nth === 1) return 2;
  const primeArr = [2];
  // 모든 자연수는 소수를 포함하고 있다  (100% 참인 사실)
  // 소수만으로 판별하는 거다!
  let cnt = 0;
  for (let i = 2; i++; ) {
    let isPrime = true;
    for (let j = 0; j < primeArr.length; j++) {
      if (i % primeArr[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      cnt++;
      primeArr.push(i);
    }
    if (cnt === nth - 1) return i;
  }
};
