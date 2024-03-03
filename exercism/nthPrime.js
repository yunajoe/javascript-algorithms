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

//  sol2) generator를 사용하여 풀어보자!
function* generatePrimeArr() {
  let num = 2;
  while (true) {
    let isPrime = true;
    if (num === 2) yield num;
    if (num > 2) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        yield num;
      }
    }

    num++;
  }
}

const prime2 = (numIndex) => {
  if (numIndex === 0) throw new Error("there is no zeroth prime");
  const res = generatePrimeArr();
  const primeArr = [];

  while (true) {
    primeArr.push(res.next().value);
    if (numIndex === primeArr.length) {
      return primeArr[numIndex - 1];
    }
  }
};
