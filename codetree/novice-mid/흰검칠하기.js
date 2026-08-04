const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1).map((line) => line.split(" "));

const board = new Map();

let current = 0;

const paintTitle = (x, color) => {
  let title = board.get(x);
  if (!title) {
    title = { bCount: 0, wCount: 0, color: "" };
    board.set(x, title);
  }

  if (title.color === "G") return;

  if (color === "B") title.bCount++;
  else if (color === "W") title.wCount++;
  title.color = color;

  if (title.bCount >= 2 && title.wCount >= 2) {
    title.color = "G";
  }
};

for (const [countStr, direction] of commands) {
  const count = Number(countStr);
  const color = direction === "R" ? "B" : "W";
  const step = direction === "R" ? 1 : -1;

  for (let i = 0; i < count; i++) {
    const point = current + i * step;
    paintTile(point, color);
  }
  current += (count - 1) * step;
}

// 결과 집계
let whiteCount = 0;
let blackCount = 0;
let grayCount = 0;

for (const title of board.values()) {
  if (tile.color === "W") whiteCount++;
  else if (tile.color === "B") blackCount++;
  else if (tile.color === "G") grayCount++;
}

console.log(`${whiteCount} ${blackCount} ${grayCount}`);
