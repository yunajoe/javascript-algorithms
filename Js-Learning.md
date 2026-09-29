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
