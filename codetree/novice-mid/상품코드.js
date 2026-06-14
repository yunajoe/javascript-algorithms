const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [prod2_id, code2] = input[0].split(" ");
// Please Write your code here.

class Product {
  constructor(name = "codetree", code = 50) {
    this.name = name;
    this.code = code;
  }
}

const product1 = new Product();
const product2 = new Product(prod2_id, code2);

console.log(`product ${product1.code} is ${product1.name}`);
console.log(`product ${product2.code} is ${product2.name}`);
