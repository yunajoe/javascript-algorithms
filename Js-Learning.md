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
