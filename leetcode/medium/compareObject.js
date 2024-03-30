/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

// 아래는 timeExceed 에러남
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    const result = obj.reduce((acc, curr) => {
      if (!Boolean(curr)) {
        return acc;
      } else if (typeof curr === "object") {
        const result = compactObject(curr);
        return [...acc, result];
      }

      return [...acc, curr];
    }, []);
    return result;
  }

  if (typeof obj === "object" && !Array.isArray(obj)) {
    const newObject = new Object();
    for (const key in obj) {
      if (!Boolean(obj[key])) {
        continue;
      } else if (typeof obj[key] === "object") {
        const result = compactObject(obj[key]);
        newObject[key] = result;
      } else {
        newObject[key] = obj[key];
      }
    }
    return newObject;
  }
};

// 아래는 됨
var compactObject = function (obj) {
  if (!Boolean(obj)) return;

  // typeof를 한 이유는 array나 object는 그대로 return값을 주는게 아니라 그 안의 element값들도 봐야되니까!
  if (typeof obj !== "object" && Boolean(obj)) {
    return obj;
  }

  // Array
  if (Array.isArray(obj)) {
    const compactArr = [];
    for (let i = 0; i < obj.length; i++) {
      let val = compactObject(obj[i]);
      if (val) {
        compactArr.push(val);
      }
    }
    return compactArr;
  }

  if (typeof obj === "object" && !Array.isArray(obj)) {
    const compactObj = {};
    for (let key in obj) {
      const val = compactObject(obj[key]);
      if (val) {
        compactObj[key] = val;
      }
    }
    return compactObj;
  }
};

console.log(compactObject(arr));
