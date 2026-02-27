/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let prevTime = 0;
  const stack = [];
  const result = Array.from({ length: n }).fill(0);

  for (const log of logs) {
    const [id, execution, time] = log.split(":");
    const timeStamp = Number(time);
    if (stack.length === 0) {
      stack.push(id);
      prevTime = timeStamp;
      continue;
    }

    if (execution === "start") {
      result[stack[stack.length - 1]] += timeStamp - prevTime;
      stack.push(id);
      prevTime = timeStamp;
    } else {
      result[stack[stack.length - 1]] += timeStamp - prevTime + 1;
      stack.pop();
      prevTime = timeStamp + 1;
    }
  }
  return result;
};
