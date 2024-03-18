// const TimeLimitedCache = function () {
//   this.cache = new Map();
//   this.timeOutID = "";
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @param {number} duration
//  * @return {boolean}
//  *
//  */

// // setter
// //  만약 duration이 unexpired한 key가 있으면은  true, 없으면은 false
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   if (!this.cache.has(key)) {
//     this.timeOutId = setTimeout(() => {
//       this.cache.delete(key);
//     }, duration);
//     this.cache.set(key, value);
//     return false;
//   }

//   if (this.cache.has(key)) {
//     clearTimeout(this.timeoutID);
//     this.cache.set(key, value);
//     this.timeOutId = setTimeout(() => {
//       this.cache.delete(key);
//     }, duration);
//     return true;
//   }
// };

// /**
//  * @param {number} key
//  * @return {number} value associated with key
//  */
// TimeLimitedCache.prototype.get = function (key) {
//   // key가 잇으면 value를 return
//   if (this.cache.has(key)) {
//     return this.cache.get(key);
//   }
//   // key가 없으면 -1를 return
//   return -1;
// };

// /**
//  * @return {number} count of non-expired keys
//  */
// TimeLimitedCache.prototype.count = function () {
//   return this.cache.size;
// };

const TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 *
 */

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let timeoutID = "";
  if (!this.cache.has(key)) {
    timeoutID = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutID });
    return false;
  }

  if (this.cache.has(key)) {
    // 이전의 time을 지워주구!
    clearTimeout(this.cache.get(key).timeoutID);
    timeoutID = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeoutID });
    return true;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
