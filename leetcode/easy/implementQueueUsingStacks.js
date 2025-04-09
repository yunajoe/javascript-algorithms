var MyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */

MyQueue.protytype.push = function (x) {
  this.queue = [...this.queue, x];
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let value = this.queue.shift();
  return value;
};

/**
 * @return {number}
 *
 */
MyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 *
 */
MyQueue.prototype.empty = function () {
  return this.queue.length === 0 && true;
};
