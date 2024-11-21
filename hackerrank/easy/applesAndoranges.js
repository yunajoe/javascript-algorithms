//  time limit exceeds
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const locateApples = apples.reduce((acc, value) => {
    acc = [...acc, value + a];
    return acc;
  }, []);
  const locateOranges = oranges.reduce((acc, value) => {
    acc = [...acc, value + b];
    return acc;
  }, []);
  const range = (start, stop, step) =>
    Array.from(
      { length: stop - start + 1 },
      (_, index) => start + index * step
    );
  const rangeArr = range(s, t, 1);
  const cnt1 = countFruitValue(rangeArr, locateApples);
  const cnt2 = countFruitValue(rangeArr, locateOranges);

  console.log(cnt1);
  console.log(cnt2);
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && t >= apples[i] + a) {
      appleCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && t >= oranges[i] + b) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
