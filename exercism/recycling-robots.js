/**
 * 
 * 외부에 직접 노출되지 않는 고유하고 유일한 식별자(심볼)를 생성합니다.
  객체의 속성 이름으로 충돌할 염려가 없고, 외부에서 무단으로 값을 유추하거나 접근하기 어렵게 만드는 은닉(Encapsulation) 용도로 쓰입니다.
 * 
 * 
 */
const certification = Symbol("Certification");

export class ElectronicDevice {
  // This class will be used in the exercise.

  /**
   * 
   * 자바스크립트의 instanceof 연산자의 동작을 커스텀하는 정적(static) 메서드입니다.
    일반적인 instanceof는 프로토콜 체인을 확인하지만, 이 코드가 적용되면 객체 instanceof ElectronicDevice를 수행할 때 
    프로토콜 체인을 보는 대신 해당 객체가 올바른 인증 값(__certification)을 가지고 있는지를 검사하여  true 또는 false를 반환
   * 
   * 
   */

  /**
   *
   * @param instance
   * @returns
   */
  static [Symbol.hasInstance](instance) {
    return instance && instance.__certification === certification;
  }

  /**
   * 
   * 클래스의 인스턴스가 생성될 때 실행되는 생성자입니다.
    Object.defineProperty를 이용해 인스턴스에 __certification이라는 숨겨진 속성을 부여하며, 다음과 같이 엄격하게 보호됩니다:
    enumerable: false: for...in 반복문이나 Object.keys() 등으로 속성이 노출되지 않습니다.
    writable: false: 값을 강제로 수정할 수 없습니다.
    configurable: false: 속성을 삭제하거나 설정을 바꿀 수 없습니다.
   * 
   * 
   */

  constructor() {
    Object.defineProperty(this, "__certification", {
      enumerable: false,
      writable: false,
      configurable: false,
      value: certification,
    });
  }
}

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return typeof value === "boolean";
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  return (
    (typeof value === "number" && Number.isFinite(value)) ||
    typeof value === "bigint"
  );
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  return typeof value === "object" && value !== null;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  if (typeof value !== "string") {
    return false;
  }
  return /^-?\d+$/.test(value);
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  // instanceof의 오른쪽에는 인스턴스가 아니라 클래스 이름 자체가 와야한다.
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  return "type" in object;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  if (!("id" in object)) {
    throw new Error("Object is missing the 'id' property");
  }
  return;
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  return Object.hasOwn(object, "id");
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  return Object.hasOwn(object, "type") && object.type !== undefined;
}
