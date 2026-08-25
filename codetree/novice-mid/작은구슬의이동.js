const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

const isRange = (r, c) => {
  return 0 <= r && r < n && 0 <= c && c < n;
};
// 인덱스에 맞게 -1 씩 변함
let idxR = r - 1;
let idxC = c - 1;
// 시간
let time = 0;
// R, D, L, U (동쪽, 남쪽, 서쪽, 북쪽)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const directObject = {
  R: 0,
  D: 1,
  L: 2,
  U: 3,
};

let directIdx = directObject[d]; // 2

for (let i = 0; i < t; i++) {
  const nextR = idxR + dx[directIdx];
  const nextC = idxC + dy[directIdx];
  if (isRange(nextR, nextC)) {
    idxR = nextR;
    idxC = nextC;
  } else {
    directIdx = (directIdx + 2) % 4;
  }
}

console.log(idxR + 1, idxC + 1);
