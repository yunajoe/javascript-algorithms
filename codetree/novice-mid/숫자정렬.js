const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

// Please Write your code here.
function ascendingComp(prev, cur) {
  if (prev > cur)
    return 1; // 비교 하는 두 수 중 앞의 값이 크니 prev 뒤로 보내자
  else if (prev < cur) return -1; // 비교 하는 두 수 중 뒤의 값이 크니, prev는 앞으로 보내자
  return 0;
}

function descendingComp(prev, cur) {
  if (prev > cur)
    return -1; // 비교 하는 두 수 중 앞의 값이 크니 앞으로 보내자
  else if (prev < cur) return 1; // 비교 하는 두 수 중 앞이 작으니 뒤로 보내자
  return 0;
}

console.log(nums.sort(ascendingComp).join(" "));
console.log(nums.sort(descendingComp).join(" "));
