//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid Input";
  }
}

export class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "north";
  }

  get bearing() {
    return this.direction;
  }
  get coordinates() {
    return [this.x, this.y];
  }

  place({ x, y, direction }) {
    const directions = ["north", "east", "south", "west"];
    if (!directions.includes(direction)) {
      throw new InvalidInputError();
    }
    if (typeof x !== "number" || typeof y != "number") {
      throw new InvalidInputError();
    }
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  // 방향 전환 메서드 (L, R)
  turn(direction) {
    const directions = ["north", "east", "south", "west"];
    const currentDirectionIndex = directions.indexOf(this.direction);
    if (direction === "L") {
      // 왼쪽으로 인덱스 이동
      const targetIndex = (currentDirectionIndex + 3) % 4;
      this.direction = directions[targetIndex];
    } else {
      // 오른쪽으로 인덱스 이동
      const targetIndex = (currentDirectionIndex + 1) % 4;
      this.direction = directions[targetIndex];
    }
  }

  // 좌표 전환 메서드(A)
  advance(direction) {
    const currentDirection = this.direction;
    if (currentDirection === "north") {
      this.y += 1;
    } else if (currentDirection === "east") {
      this.x += 1;
    } else if (currentDirection === "south") {
      this.y -= 1;
    } else {
      this.x -= 1;
    }
  }

  evaluate(instructions) {
    for (const order of instructions) {
      if (!["A", "L", "R"].includes(order)) {
        throw new InvalidInputError();
      }
      if (order === "L" || order === "R") {
        this.turn(order);
      } else {
        this.advance(order);
      }
    }
  }
}
