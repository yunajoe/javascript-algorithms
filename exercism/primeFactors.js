const primeFactors = (numbers) => {
  const factors = [];
  while (numbers % 2 === 0) {
    factors.push(2);
    numbers = numbers / 2;
  }

  for (let i = 3; i * i <= numbers; i++) {
    while (numbers % i === 0) {
      factors.push(i);
      numbers = numbers / i;
    }
  }

  if (numbers > 1) {
    factors.push(numbers);
  }

  return factors;
};
