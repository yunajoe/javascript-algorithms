// sol1)
const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primes = (n) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  return arr.filter((num) => isPrimeNumber(num));
};

// sol2)
const primes2 = (n) => {
  const arr = Array.from({ length: n + 1 }, () => true);
  arr[0] = arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!arr[i]) continue;
    for (let j = i * i; j < n; j += i) {
      arr[j] = false;
    }
  }
  return arr.map((bool, i) => (bool ? i : bool)).filter((v) => v);
};
