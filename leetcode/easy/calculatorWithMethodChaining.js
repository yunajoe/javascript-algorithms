class Calculator {
  constructor(value) {
    this.valueNum = value;
  }
  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.valueNum += value;
    return this;
  }
  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.valueNum -= value;
    return this;
  }
  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.valueNum *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.valueNum /= value;
    return this;
  }
  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.valueNum = Math.pow(this.valueNum, value);
    return this;
  }
  /**
   * @return {number}
   */
  getResult() {
    return this.valueNum;
  }
}

const cal1 = new Calculator(10);

console.log(cal1.add(5).subtract(7).multiply(2).getResult());
