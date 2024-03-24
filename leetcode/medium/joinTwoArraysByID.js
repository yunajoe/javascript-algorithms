// /**
//  * @param {Array} arr1
//  * @param {Array} arr2
//  * @return {Array}
//  */

// timeOut
// var join = function (arr1, arr2) {
//   const arr1Ids = arr1.map((obj) => {
//     return obj.id;
//   });
//   const arr2Ids = arr2.map((obj) => {
//     return obj.id;
//   });
//   const mergesIds = [...arr1Ids, ...arr2Ids];
//   const settedMap = new Set(mergesIds);

//   //   중복되는게 없을떄
//   if (settedMap.size === mergesIds.length) {
//     return [...arr1, ...arr2].sort((a, b) => a.id - b.id);
//   }
//   //  중복 되는게 있을떄
//   let final = [];
//   const mergedArr = [...arr1, ...arr2];
//   mergedArr.forEach((item) => {
//     let targetItem = final.find((target) => target.id === item.id);
//     // array안에 같은 id가 있는 경우!
//     if (targetItem) {
//       const newFinal = final.map((finalItem) => {
//         if (item.id === finalItem.id) {
//           return { ...finalItem, ...item };
//         }
//         return finalItem;
//       });

//       final = [...newFinal];
//     }
//     // array안에 같은 id가 없는 경우
//     if (!targetItem) {
//       final.push(item);
//     }
//   });

//   return final.sort((a, b) => {
//     return a.id - b.id;
//   });
// };

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let mergedArr = arr1.concat(arr2);

  let result = {};
  for (const obj of mergedArr) {
    if (!result[obj.id]) {
      result[obj.id] = obj;
    } else {
      result[obj.id] = { ...result[obj.id], ...obj };
    }
  }

  return Object.values(result);
};

var join2 = function (arr1, arr2) {
  let obj = {};

  arr1.forEach((item) => (obj[item.id] = item));
  arr2.forEach((item) => {
    if (obj[item.id]) {
      obj[item.id] = { ...obj[item.id], ...item };
    } else {
      obj[item.id] = item;
    }
  });
  return Object.values(obj);
};
