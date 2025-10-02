// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const str1 = Number(array1.join(""));
  const str2 = Number(array2.join(""));
  return str1 + str2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);
  let initIndex = 0;
  let lastIndex = str.length - 1;
  while (initIndex < lastIndex) {
    if (str[initIndex] !== str[lastIndex]) {
      return false;
    }
    initIndex++;
    lastIndex--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

export function errorMessage(input) {
  let errorMessage = "";
  if (!input) {
    errorMessage = "Required field";
  } else if (!Number(input)) {
    errorMessage = "Must be a number besides 0";
  }
  return errorMessage;
}
