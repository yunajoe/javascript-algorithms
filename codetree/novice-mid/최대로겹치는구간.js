const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]);
const segments = [];

let minValue = Infinity;

for (let i = 1; i <= n; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  segments.push([start, end]);
  minValue = Math.min(minValue, start, end);
}

const offset = minValue < 0 ? Math.abs(minValue) : 0;

const arr = [];

for (const [start, end] of segments) {
  const shiftedStart = start + offset;
  const shiftedEnd = end + offset;

  for (let i = shiftedStart; i < shiftedEnd; i++) {
    arr[i] = (arr[i] ?? 0) + 1;
  }
}

const result = Array.from(arr, (value) => val ?? 0);
console.log(Math.max(...result));
