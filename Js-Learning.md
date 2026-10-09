# JavaScript Error

## 1. 에러(Error)란?

- 프로그램이나 코드에서 무언가 잘못되었거나 예상치 못한 상황이 발생했을 때 이를 알리기 위해 사용합니다.
- JavaScript에서 에러는 **객체(Object)** 형태로 다뤄집니다.
- 가장 핵심적인 프로퍼티는 에러 내용을 담고 있는 `message`입니다.

```javascript
const error = new Error("Oops, something went wrong");
console.log(error.message); // => "Oops, something went wrong"
```

## 2. 에러 던지기 (`throw`)

- `throw` 키워드를 사용하면 직접 에러를 발생시킬 수 있습니다.

```javascript
throw new Error("Oops");
```

- 에러가 throw되면 **현재 코드의 실행이 즉시 중단**되고, 호출 스택(Call Stack)에서 가장 가까운 `catch` 블록으로 제어권이 넘어갑니다.

## 3. 예외 처리 (`try...catch`)

- 에러가 발생할 수 있는 코드를 `try` 블록으로 감싸고, 에러 발생 시 처리를 `catch` 블록에서 담당합니다.

```javascript
try {
  throw new Error("Oops");
} catch (error) {
  console.log(error.message); // => "Oops"
}
```

## 4. 커스텀 에러(Custom Errors) 만들기

- JavaScript의 다른 클래스들처럼 `extends` 키워드를 사용하여 기본 `Error` 클래스를 상속받는 **사용자 정의 에러**를 만들 수 있습니다.
- `instanceof` 연산자를 사용하면 잡힌 에러가 특정 커스텀 에러의 인스턴스인지 확인할 수 있어 에러 타입별 분기 처리가 가능합니다.

```javascript
class CustomError extends Error {}

try {
  // 에러가 발생할 수 있는 코드
} catch (error) {
  if (error instanceof CustomError) {
    console.log("The error thrown is an instance of the CustomError");
  }
}
```

## 5. try - catch 사용 시점

"에러를 밖으로 던질 거라면, 굳이 `try...catch`를 쓰지 마세요."

이렇게 말씀드린 이유는 **에러를 처리(수습)하지도 않으면서 불필요한 복잡성만 더하게 되기 때문**입니다. 조금 더 쉽게 정리해 드릴게요.

### 1. `try...catch`의 본질

프로그래밍에서 `try...catch`는 에러로 인해 앱이 다운되거나 멈추는 것을 막아주는 안전장치(방패)입니다.

- **사용 목적**: 에러가 발생했을 때 앱이 멈추는 걸 막고, "에러가 났으니 이 기본값을 보여주자"처럼 **상황을 수습하고 복구**하기 위해 씁니다.

### 2. `catch` 안에서 곧바로 `throw`를 한다면?

- 방패로 에러를 막아놓고는, 곧바로 **"아 몰라, 다시 던져!" (`throw error`)** 하며 상위 호출부로 책임을 떠넘기는 꼴입니다.
- 이러면 `try...catch`를 쓴 의미가 사라집니다. 어차피 에러는 밖으로 터져 나갈 테니까요.

### 핵심 요약

1. **에러를 직접 수습하고 끝낼 때만 `try...catch`를 쓰세요.**

- 에러가 나도 프로그램을 멈추지 않고, 기본값 반환이나 대체 로직으로 **해결**할 수 있을 때 필요합니다.

2. **에러를 단순히 상위로 올려보낼(Throw) 거라면 쓰지 마세요.**

- 어차피 밖으로 던질 거라면 `try...catch`를 쓰나 마나 결과는 같습니다. 불필요한 코드만 늘어나므로, 그냥 에러를 그대로 흘려보내는 것이 훨씬 깔끔합니다.

---

### 🛠️ 코드 비교

**❌ 불필요한 `try...catch` (비추천)**

```javascript
async function fetchData() {
  try {
    return await api.getData(); // 에러를 잡아놓고...
  } catch (error) {
    throw error; // 다시 그대로 던짐 (의미 없음)
  }
}
```

**⭕ 깔끔하고 올바른 방식 (추천)**

```javascript
async function fetchData() {
  return await api.getData(); // 에러는 상위 호출부에서 알아서 처리하도록 둠
}
```

# JavaScript Set

## 1. Set이란?

- **중복 없는 값들의 집합**: 원시값과 객체 참조를 모두 저장할 수 있습니다.
- **인덱스 접근 불가**: 배열과 달리 인덱스로 특정 요소에 접근할 수 없습니다.

## 2. 핵심 동작 방식 (중복 판별)

- **엄격한 일치 비교(`===`)**: Set은 값이 완전히 일치하는지(`===`) 확인하여 중복을 걸러냅니다.
- **객체와 원시값의 차이**:
- **원시값**: 값이 같으면 중복으로 판단하여 추가되지 않습니다. (예: `77`을 두 번 추가해도 크기는 `1`만 증가)
- **객체**: 내용이 같아도 참조값(메모리 주소)이 다르면 다른 객체로 취급하여 각각 추가됩니다.

## 3. 주요 활용법

- **배열로 Set 생성하기**

```javascript
const array = [1, 5, 4, 1];
const set = new Set(array); // 중복이 제거되어 [1, 5, 4]가 됨
```

- **Set을 다시 배열로 변환하기**

```javascript
const array = Array.from(set); // Set이나 Map 같은 이터러블을 배열로 변환
```

# Javascript DateTime

## 1. Date 개요

- JavaScript는 날짜와 시간을 저장하고 관리하기 위해 내장 객체 `Date`를 제공합니다.
- 자바의 예전 클래스에 기반을 두고 있어 다소 다루기 까다로우며, 타임존 처리가 미흡해 실무에서는 보통 `luxon` 같은 모던 라이브러리나 최신 API를 권장합니다. 하지만 기본적인 날짜 이해를 위해 `Date`는 여전히 중요합니다.

---

## 2. Date 객체 생성 방법 (`new Date()`)

생성자(`new Date()`)에 전달하는 인자에 따라 다양한 방식으로 생성할 수 있습니다.

1. **인자 없음 (현재 시간)**

```javascript
const now = new Date(); // 현재 날짜와 시간 (사용자의 로컬 타임존 기준)
```

2. **Unix Timestamp (숫자)**

- 1970년 1월 1일 UTC+0 기준으로부터 경과된 밀리초(millisecond) 정수값입니다.

```javascript
const epoch = new Date(0); // 1970년 1월 1일 기준
const another = new Date(1749508766627);
```

3. **ISO 8601 Timestamp (문자열)**

- 표준화된 문자열 형식을 사용하며, 가장 안정적이고 권장되는 방식입니다.
- 형식: `YYYY-MM-DDTHH:mm:ss.mssZ` (예: `2025-06-10T00:39:26Z`)
- 문자열 끝에 `Z`가 없거나 오프셋이 없다면, 날짜 형태는 UTC, 날짜-시간 형태는 로컬 타임으로 해석되므로 주의해야 합니다.

4. **기존 Date 객체 복사**

```javascript
const t1 = new Date();
const t2 = new Date(t1); // t1과 동일한 값을 가진 새로운 객체 생성
```

5. **개별 컴포넌트 값 전달 (숫자 여러 개)**

- 연도, 월(0~11, **0이 1월**), 일, 시, 분, 초 등을 전달합니다.

```javascript
const date = new Date(2013, 11, 5, 13, 24, 0); // 월은 0부터 시작하므로 11은 12월
```

---

## 3. Date 컴포넌트 조회 및 수정

날짜의 각 구성요소를 가져오고(`get...`) 수정(`set...`)할 수 있습니다.

- **조회 메서드**: `getFullYear()`, `getMonth()` (0~~11), `getDate()` (1~~31), `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`, `getDay()` (0: 일요일 ~ 6: 토요일)
- **수정 특징**: `set...` 메서드를 사용할 때 범위를 벗어나는 값이 들어가면 자동으로 다음 컴포넌트로 넘어갑니다(rollover).

```javascript
const date = new Date("2025-02-28T12:42:00Z");
date.setDate(29); // 2025년 2월 29일은 없으므로 3월 1일로 넘어감
console.log(date.toString()); // Sat Mar 01 2025 ...
```

- _참고: 로컬 타임존을 무시하고 UTC 기준으로 동작하는 동명의 유씨씨(UTC) 메서드들도 존재합니다._

---

## 4. 변환 및 비교

### 1. 다른 형태로 변환

- **Timestamp 변환**: `getTime()`을 호출하면 밀리초 단위의 숫자를 반환합니다.
- **ISO 문자열 변환**: `toISOString()`을 통해 ISO 8601 문자열로 바꿀 수 있습니다.

### 2. 날짜 비교

- 크기 비교(`>`, `<`, `>=`, `<=`)는 내부적으로 `getTime()`으로 변환되어 비교되므로 그대로 사용할 수 있습니다.
- 단, 동등 비교(`==`, `===`)는 참조값이 다르기 때문에 정상적으로 동작하지 않으므로, **`.getTime()` 값을 비교**해야 합니다.

# Javascript type checking

## 1. `typeof` 연산자 (원시 타입 및 기본 타입 확인)

- **역할**: 피연산자의 타입을 **문자열**로 반환합니다.
- **반환 값 종류**: `"undefined"`, `"boolean"`, `"number"`, `"string"`, `"function"`, `"object"` 등
- **주의사항**: 역사적인 이유로 `typeof null`은 `"object"`를 반환하며, 배열과 일반 객체 모두 `"object"`로 반환됩니다.

```javascript
typeof undefined; // => "undefined"
typeof true; // => "boolean"
typeof 42; // => "number"
typeof "Hello"; // => "string"
typeof function () {}; // => "function"
typeof [1, 2, 3]; // => "object" (배열도 object로 반환)
typeof null; // => "object" (주의!)
```

---

## 2. `instanceof` 연산자 (객체 인스턴스 관계 확인)

- **역할**: 객체가 특정 클래스(생성자)의 인스턴스인지 프로토타입 체인을 통해 확인합니다 (`true`/`false` 반환).
- **특징**: 객체에만 사용 가능하며, 자식 클래스는 부모 클래스 검사 시에도 `true`를 반환합니다.

```javascript
class Beverage {}
class Coffee extends Beverage {}

const java = new Coffee();

java instanceof Coffee; // => true (Coffee의 인스턴스)
java instanceof Beverage; // => true (부모 클래스인 Beverage의 인스턴스이기도 함)
```

---

### 3. `Array.isArray()` (안전한 배열 확인)

- **역할**: 값이 배열인지 여부를 정확히 판별합니다.
- **필요성**: `instanceof Array`는 iframe(다른 렐름) 환경이나 프로토타입이 조작된 객체에서 오작동할 수 있지만, `Array.isArray()`는 이를 안전하게 무시하므로 **배열 검사 시 항상 권장**됩니다.

```javascript
// 잘못된 판단을 하는 경우 (instanceof)
({ __proto__: Array.prototype }) instanceof Array; // => true (가짜 배열임에도 참 반환)

// 올바르게 판단하는 경우 (Array.isArray)
Array.isArray({ __proto__: Array.prototype }); // => false (정확히 배열이 아님을 감지)
Array.isArray([1, 2, 3]); // => true
```

---

### 4. `in` 연산자 (프로퍼티 존재 여부 확인)

- **역할**: 객체 안에 해당 프로퍼티가 존재하는지 확인합니다 (`true`/`false` 반환).
- **특징**: 값이 `undefined`로 설정된 프로퍼티도 감지하며, 객체 고유의 프로퍼티뿐만 아니라 **상속받은 프로퍼티나 메서드**까지 모두 `true`로 판단합니다.

```javascript
class Coffee {
  constructor() {
    this.temperature = "hot";
    this.isDarkMatter = undefined; // 값이 undefined인 프로퍼티
  }
  coolDown() {
    this.temperature = "warm";
  }
}

const espresso = new Coffee();

"temperature" in espresso; // => true (존재함)
"isDarkMatter" in espresso; // => true (값이 undefined여도 존재함)
"color" in espresso; // => false (존재하지 않음)
"coolDown" in espresso; // => true (상속/메서드도 포함)
```

---

### 5. `Object.hasOwn()` (고유 프로퍼티 소유 여부 확인)

- **역할**: 상속받거나 부모로부터 온 것이 아닌, 객체 자신이 **직접 소유한 고유 프로퍼티**인지 확인합니다.
- **특징**: `in` 연산자와 달리 상속된 프로퍼티나 메서드는 `false`를 반환하므로, 객체 내부의 실제 데이터 속성만 정확히 확인하고 싶을 때 유용합니다.

```javascript
class Coffee {
  constructor() {
    this.temperature = "hot";
  }
  coolDown() {
    this.temperature = "warm";
  }
}

const cappuccino = new Coffee();

Object.hasOwn(cappuccino, "temperature"); // => true (직접 소유한 속성)
Object.hasOwn(cappuccino, "coolDown"); // => false (메서드/상속된 것이라 아님)
Object.hasOwn(cappuccino, "constructor"); // => false (프로토타입 상속 속성)
```

# Javascript Promise

자바스크립트의 **Promise(프로미스)** 개념과 동작 방식을 알기 쉽게 정리해 드립니다.

---

## 1. Promise의 개념과 3가지 상태 (Lifecycle)

Promise는 비동기 작업의 **최종 완료(성공) 또는 실패와 그 결과 값**을 나타내는 객체입니다. 생성될 때 `pending` 상태로 시작해 최종적으로 한 번만 상태가 결정(settled)됩니다.

- **Pending (대기 중)**: 비동기 작업이 완료되지 않은 초기 상태
- **Fulfilled (이행됨)**: 작업이 성공적으로 완료된 상태 (`value` 값을 가짐, 변경 불가)
- **Rejected (거부됨)**: 작업이 실패한 상태 (`reason` 에러/이유를 가짐, 변경 불가)

> 💡 **핵심 규칙:** 한 번 fulfilled나 rejected 상태가 되면 **절대 다른 상태로 변경될 수 없으며**, 결괏값이나 에러 사유도 변경할 수 없습니다.

---

## 2. Promise 해결(Resolve)과 거부(Reject)

- **해결 (Resolve)**: 성공적인 결과 처리
- `Promise.resolve(value)` 또는 `new Promise((resolve) => resolve(value))`
- 체이닝 과정에서 값을 반환(return)하면 다음 Promise는 해결(fulfilled)됩니다.

- **거부 (Reject)**: 실패/에러 처리
- `Promise.reject(reason)` 또는 `new Promise((_, reject) => reject(reason))`
- 체이닝 과정에서 **에러를 던지면(`throw reason`)** 다음 Promise는 거부(rejected)됩니다.

---

## 3. 체이닝 메서드 (`.then`, `.catch`, `.finally`)

Promise는 후속 처리를 위해 체이닝 메서드를 제공하며, 호출 시 **항상 새로운 Promise를 반환**합니다.

| 메서드                              | 실행 시점                        | 역할 및 특징                                                                                                                                  |
| ----------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **`.then(onResolved, onRejected)`** | 성공 시 또는 실패 시             | 성공 시 콜백(`onResolved`)과 실패 시 콜백(`onRejected`)을 처리합니다. 값을 리턴하면 성공, 에러를 던지면 거부 상태의 새 프로미스가 반환됩니다. |
| **`.catch(onCatch)`**               | 거부(실패) 시                    | 이전 프로미스에서 발생한 에러를 잡아냅니다. (`.then(null, onRejected)`와 동일)                                                                |
| **`.finally(onSettled)`**           | 성공/실패 여부와 관계없이 무조건 | 작업이 끝나면 항상 실행됩니다. 값을 반환해도 기존 프로미스의 상태/값을 그대로 전달(무시)하지만, 에러를 던지면 거부 상태로 바꿉니다.           |

---

## 4. 요약 예시 코드 흐름

```javascript
const finalPromise = myPromise
  .then((sampled) => {
    console.log(`성공: ${sampled}`);
    return "yay"; // 성공 시 다음 프로미스는 'yay'로 resolved
  })
  .catch((reason) => {
    throw new Error(reason); // 실패 시 에러를 던져 거부(rejected) 상태로 만듦
  })
  .finally(() => {
    console.log("Promise completed"); // 성공하든 실패하든 무조건 실행
  });
```

## 5. `reject(error)` 대신 `throw error`를 쓰면 안 되는 이유 (비동기 콜백의 함정)

가이드 문서에서 보셨듯, Promise는 에러가 발생했을 때 **거부(Rejected)** 상태로 만들어야 합니다. 하지만 `new Promise` 생성자 안의 비동기 콜백 내부에서는 `throw error`가 예상대로 동작하지 않습니다.

### 🔄 내부 동작 차이

- **`reject(error)` 호출 (정상 동작)**
- `new Promise`가 제공하는 `reject` 함수는 프로미스의 상태를 명시적으로 **Rejected**로 바꾸고, 거부 이유(`reason`)에 에러를 담아 전달합니다. 이 덕분에 바깥쪽 테스트 러너나 `.catch`가 에러를 올바르게 감지할 수 있습니다.

- **`throw error` 사용 (타임아웃 발생)**
- 비동기 콜백(`.then()` 내부 등) 안에서 `throw error`를 하면, 그 에러는 `new Promise` 바깥으로 전파되지 않고 콜백 함수 내부에서 길을 잃습니다.
- 결과적으로 `new Promise` 입장에서는 `resolve`도 `resject`도 호출되지 않은 채 영원히 초기 상태(**Pending**)에 머물게 되며, 테스트는 응답을 기다리다 **Timeout 에러**로 실패하게 됩니다.

---

## 6. `new Promise` 내부에서 `return this.api.fetch`를 안 해도 되는 이유

함수를 작성할 때 내부 동작에 `return`이 없으면 밖에서도 값을 못 받을 것 같지만, Promise의 구조를 이해하면 왜 생략해도 되는지 명확해집니다.

### 🛠️ 역할의 분리: 전체 함수 vs 내부 생성자

1. **함수 전체의 `return` (`free` 메서드 레벨)**

- `free(text)` 함수는 맨 앞에서 `return new Promise(...)`를 통해 **Promise 객체 자체를 바깥으로 반환**합니다. 이 덕분에 함수를 호출하는 쪽(`.resolves.toBe(...)`)에서 결과가 담길 Promise 객체를 받아올 수 있습니다.

2. **내부 생성자 안에서의 `return` 무시**

- `new Promise((resolve, reject) => { ... })` 내부의 콜백 함수는 자바스크립트 엔진이 무엇을 리턴하든 **리턴값을 완전히 무시**합니다. 즉, `return this.api.fetch(...)`라고 써도 바깥으로 전달되는 값은 없습니다.

3. **값 전달의 유일한 통로: `resolve` / `reject**`

- 비동기 작업인 `this.api.fetch(text)`가 끝난 뒤, 값을 전달하는 유일한 방법은 `return`이 아니라 `resolve(translation)`을 호출하는 것입니다.
- `resolve(translation)`을 실행하는 순간, 프로미스 객체 내부의 상태는 **Fulfilled**가 되고 결괏값(`value`)으로 `translation`이 쏙 저장됩니다.

따라서 내부의 비동기 호출부 앞에는 `return`을 붙일 필요가 없으며, 오직 **`resolve`로 값을 전달**하고 함수 전체는 **`return new Promise`로 감싸주는 것**이 핵심입니다.

## 7. Promise 조합 메서드 비교표

| 메서드                   | 주요 동작 방식                                                    | 하나라도 실패(Reject)할 때                                 | 반환되는 결과 형태                                                                                                    |
| ------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`Promise.all`**        | 모든 프로미스가 **성공(Fulfilled)**할 때까지 기다림               | **즉시 전체 실패(Reject)** (나머지 성공 결과도 무시)       | 성공한 값들의 **배열** `[res1, res2, ...]`                                                                            |
| **`Promise.allSettled`** | 성공하든 실패하든 **모든 프로미스가 끝날 때(Settled)**까지 기다림 | 실패가 있어도 멈추지 않고 **끝까지 진행**                  | 각 상태와 결과/에러가 담긴 객체들의 **배열** `[{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]` |
| **`Promise.race`**       | 가장 **먼저 끝나는** 프로미스(성공이든 실패든)의 결과를 채택함    | 가장 먼저 끝난 것이 실패라면 **즉시 실패**                 | 가장 먼저 끝난 **단 하나의 값 또는 에러**                                                                             |
| **`Promise.any`**        | 가장 **먼저 성공(Fulfilled)**하는 프로미스의 결과를 채택함        | 실패한 것들은 무시하며, **전부가 다 실패해야만** 에러 발생 | 가장 먼저 성공한 **단 하나의 값**                                                                                     |
