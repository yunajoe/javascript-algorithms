const onlyEventNameArr = [];
const eventsArr = [];
class EventEmitter {
  //  eventName에 callback를 등록한다!
  subscribe(eventName, callback) {
    let callbackIndex;

    if (onlyEventNameArr.includes(eventName)) {
      eventsArr.forEach((item, idx) => {
        const eventKey = Object.keys(item)[0];
        if (eventKey === eventName) {
          eventsArr[idx][eventKey].push(callback);
          callbackIndex = eventsArr[idx][eventKey].length - 1;
        }
      });
    } else {
      // 처음 부른 이벤트일떄
      onlyEventNameArr.push(eventName);
      const eventObject = {};
      eventObject[eventName] = [callback];
      eventsArr.push(eventObject);
    }

    return {
      unsubscribe: () => {
        eventsArr.forEach((item, idx) => {
          const eventKey = Object.keys(item)[0];
          if (eventKey === eventName) {
            eventsArr[idx][eventKey].splice(callbackIndex, 1);
          }
        });
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */

  emit(eventName, args = []) {
    const isEventCalled = onlyEventNameArr.indexOf(eventName);
    if (isEventCalled === -1) {
      return [];
    } else {
      eventsArr.forEach((item, idx, arr) => {
        const eventKey = Object.keys(item)[0];
        if (eventName === eventKey) {
          const calledEventValue = eventsArr[idx];

          const valueList = calledEventValue[eventKey];
          const result = valueList.map((func) => {
            return func(...args);
          });
          return result;
        }
      });
    }
  }
}

// const emitter = new EventEmitter();
// ex1
// emitter.emit("firstEvent");
// emitter.subscribe("firstEvent", cb1);
// emitter.subscribe("firstEvent", cb2);
// emitter.subscribe("SecondEvent", cb1);
// emitter.emit("firstEvent");

// ex2
// emitter.subscribe("firstEvent", function cb1(...args) {
//   return args.join(",");
// });

// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]

// ex3

// const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));

// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// sub.unsubscribe();
// emitter.emit("firstEvent", [4, 5, 6]); // []

// ex4

// const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
// const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
// sub1.unsubscribe(); // undefined
// emitter.emit("firstEvent", [5]); // [7]
