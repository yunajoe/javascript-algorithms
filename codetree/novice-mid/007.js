const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [s_code, m_point, time] = input[0].split(" ");

class Secret {
  constructor(s_code, m_point, time) {
    this.s_code = s_code;
    this.m_point = m_point;
    this.time = time;
  }
}

const secret = new Secret(s_code, m_point, time);
console.log(`secret code : ${secret.s_code}`);
console.log(`meeting point : ${secret.m_point}`);
console.log(`time : ${secret.time}`);
