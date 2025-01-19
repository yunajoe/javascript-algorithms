var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  const rangeStart = t - 3000;
  const rangeEnd = t;
  let cnt = this.requests.length;
  while (cnt > 0) {
    if (this.requests[0] < rangeStart || this.requests[0] > rangeEnd) {
      this.requests.shift();
    }
    cnt--;
  }
  return this.requests.length;
};

// 위의 코드 개선

var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  const rangeStart = t - 3000;
  const rangeEnd = t;
  while (this.requests[0] < rangeStart || this.requests[0] > rangeEnd) {
    this.requests.shift();
  }
  return this.requests.length;
};
