// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");

// // 1. 하나의 유저 정보를 담는 깔끔한 클래스 정의
// class User {
//   constructor(codename, score) {
//     this.codename = codename;
//     this.score = parseInt(score, 10);
//   }
// }

// // 2. 입력 데이터를 User 인스턴스 배열로 변환
// const users = input.map((line) => {
//   const [codename, score] = line.split(" ");
//   return new User(codename, score);
// });

// // 3. reduce를 이용해 가장 점수가 낮은 유저 찾기
// const lowestUser = users.reduce((minUser, currentUser) => {
//   return currentUser.score < minUser.score ? currentUser : minUser;
// }, users[0]); // 첫 번째 유저를 초기값으로 설정해서 안전함

// // 4. 결과 출력
// console.log(`${lowestUser.codename} ${lowestUser.score}`);
