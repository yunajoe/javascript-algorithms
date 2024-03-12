/**
 * @return {Function}
 */

let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f() // "Hello World"  args는 []
 * f({}, null, 42); // "Hello World"  args는 [{}, null, 42]
 */
