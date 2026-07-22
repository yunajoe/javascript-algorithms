const fs = require("fs");
const input = fs.readFileSync(0, "utf-8");

// Please Write your code here.
class Point {
  constructor(x, y, index) {
    this.x = Math.abs(x);
    this.y = Math.abs(y);
    this.index = index;
  }

  get sum() {
    return this.x + this.y;
  }

  static fromLine(line, index) {
    const [x, y] = line.trim().split(" ").map(Number);
    return new Point(x, y, index + 1);
  }
  compareTo(other) {
    if (this.sum !== other.sum) return this.sum - other.sum;
    return this.index - other.index;
  }
}
class PointSorterApp {
  constructor(inputString) {
    this.lines = inputString.trim().split("\n");
  }
  run() {
    const count = Number(this.lines[0]);
    const pointLines = this.lines.slice(1, count + 1);
    const points = pointLines.map((line, idx) => Point.fromLine(line, idx));
    points.sort((a, b) => a.compareTo(b));
    const output = points.map((p) => p.index).join("\n");
    console.log(output);
  }
}

const app = new PointSorterApp(input);
app.run();
