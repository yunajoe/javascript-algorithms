function countingValleys(steps, path) {
  let sum = 0;
  let answer = 0;
  let isDown = false;
  let isUp = false;

  for (let p of path) {
    if (p === "U") {
      sum += 1;
      if (sum === 0) {
        isUp = true;
      }
    } else if (p === "D") {
      sum -= 1;
      if (sum === -1) {
        isDown = true;
      }
    }

    if (isDown && isUp) {
      answer += 1;
      isUp = false;
      isDown = false;
    }
  }
  return answer;
}

// sol2)
function countingValleys(steps, path) {
  // Write your code here
  let cnt = 0;
  let isValley;
  let answer = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      cnt++;
    } else if (path[i] === "D") {
      cnt--;
    }
    if (cnt < 0) {
      isValley = true;
    }
    if (isValley && cnt >= 0) {
      isValley = false;
      answer += 1;
    }
  }
  return answer;
}
