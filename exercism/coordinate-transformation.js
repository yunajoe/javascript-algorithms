//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function moveCoordinatesRight2Px(x, y) {
    x = x + dx;
    y = y + dy;
    return [x, y];
  };
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function doubleScale(scaleX, scaleY) {
    const scaledX = sx * scaleX;
    const scaledY = sy * scaleY;
    return [scaledX, scaledY];
  };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function composedTransformations(x, y) {
    const result = f(x, y);
    const result2 = g(...result);
    return result2;
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */

// function은 오로지 하나만 받는건가?
export function memoizeTransform(f) {
  // params은 function 을받고, 그 function은 2개의 argument를 받는다.
  // return function은 은 x, y를 받고
  // 같은 함수로, 같은 결과값을 얻으면은 그걸 저장해 두었다고 그 결과값을 return
  let previousX;
  let previousY;
  let previousAnswer;
  return function memoizedSclae(x, y) {
    // 이전의 x와 현재의 x, 혹은 이전의 y와 현재의 y가 같지 않다면은 새롭게 연산을 한다.
    if (previousX !== x || previousY !== y) {
      previousX = x;
      previousY = y;
      previousAnswer = f(x, y);
    }

    return previousAnswer;
  };
}
