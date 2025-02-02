/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

const removeMultipleIndexes = (arr, indexArr) => {
  return arr.filter((_, index) => !indexArr.includes(index));
};
const IsDifferentDirection = (value1, value2) => {
  if (value1 > 0 && value2 > 0) return false;
  if (value1 < 0 && value2 < 0) return false;
  return true;
};

const returnAbsoluteSmallervalue = (asteroids, index1, index2) => {
  if (Math.abs(asteroids[index1]) > Math.abs(asteroids[index2])) return index2;
  if (Math.abs(asteroids[index1]) < Math.abs(asteroids[index2])) return index1;
  if (Math.abs(asteroids[index1]) === Math.abs(asteroids[index2]))
    return [index1, index2];
};

var asteroidCollision = function (asteroids) {
  for (let i = asteroids.length - 1; i >= 1; i--) {
    if (IsDifferentDirection(asteroids[i], asteroids[i - 1])) {
      const removedIndex = returnAbsoluteSmallervalue(asteroids, i, i - 1);
      if (typeof removedIndex === "number") {
        asteroids.splice(removedIndex, 1);
      } else if (Array.isArray(removedIndex)) {
        const result = removeMultipleIndexes(asteroids, removedIndex);
        asteroids = [...result];
      }
    } else {
      return asteroids;
    }
  }

  return asteroids;
};

// asteroids =
// [-2,-2,-2,1]

// Output
// [-2,-2,-2]
// Expected
// [-2,-2,-2,1]
// Hellooo, Here's a quick Intuition , after which you can code !!

// 🚀 Intuition:

// To simulate asteroid collisions, we can use a stack to keep track of the asteroids moving to the right (positive) ➡️. When a new asteroid comes from the left (negative) ⬅️, it may collide with the right-moving asteroids in the stack.

// 💥 Collision Rule:

// A collision occurs only when the top of the stack is a right-moving asteroid (positive ➡️) and the incoming asteroid is moving to the left (negative ⬅️). In this case, we compare their sizes:

// If the incoming asteroid is smaller, it explodes 💥, and we discard it.
// If the incoming asteroid is equal in size, both asteroids explode 💥💥, and we discard both.
// If the incoming asteroid is larger, it destroys the right-moving asteroid in the stack 💥, and we discard the right-moving one.
// 📝 Approach:

// 1️⃣ We iterate through the asteroids from left to right.
// 2️⃣ For each asteroid, we check its direction:

// If it's moving to the right (positive ➡️), we add it to the stack.

// If it's moving to the left (negative ⬅️), we handle collisions with right-moving asteroids in the stack.

// 3️⃣ After processing all asteroids, the stack contains the remaining asteroids with collisions resolved.

// By following this approach, we can find out the state of the asteroids after all collisions without explicitly simulating each collision step-by-step. Happy coding! 🚀

// PS: Don't forget to handle edge cases such as when stack is empty and a left moving asteroid comes, push it into the stck , it can now never be destroyed, think why !?💥
