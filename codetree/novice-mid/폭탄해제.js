const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [u_code, l_color, time] = input[0].split(" ");
// Please write your code here.

class Bomb {
  constructor(u_code = "", l_color = "G", time = 0) {
    this.u_code = u_code;
    this.l_color = l_color;
    this.time = time;
  }
}

const bomb1 = new Bomb(u_code, l_color, time);

console.log(`code : ${bomb1.u_code}`);
console.log(`color : ${bomb1.l_color}`);
console.log(`second : ${bomb1.time}`);
