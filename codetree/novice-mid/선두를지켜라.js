const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const bData = input
  .slice(n + 1, n + 1 + m)
  .map((line) => line.split(" ").map(Number));

const aSpeed = [];
for (const [speed, time] of aData) {
  for (let i = 0; i < time; i++) {
    aSpeed.push(speed);
  }
}

const bSpeed = [];
for (const [speed, time] of bData) {
  for (let i = 0; i < time; i++) {
    bSpeed.push(speed);
  }
}

let aPos = 0;
let bPos = 0;
let leader = 0; // 0: 동점, 1: A 선두, 2: B 선두
let leadChanges = 0;

for (let t = 0; t < aSpeed.length; t++) {
  aPos += aSpeed[t];
  bPos += bSpeed[t];

  let currentLeader = leader;

  if (aPos > bPos) currentLeader = 1;
  else if (bPos > aPos) currentLeader = 2;

  if (leader !== 0 && currentLeader !== leader) {
    leadChanges++;
  }
  leader = currentLeader;
}

console.log(leadChanges);
