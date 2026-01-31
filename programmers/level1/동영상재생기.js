/**
 *
 * @param {string} time
 * @returns
 */

// 시간을 초로 바꾸는 함수
const convertSeconds = (time) => {
  const [m, s] = time.split(":").map((item) => Number(item));
  return 60 * m + s;
};

/**
 *
 * @param {number} time
 * @returns
 */

// 시간을 분과 초로 바꾸는 항수
const convertMinutesAndSeconds = (time) => {
  const m = Math.floor(time / 60);
  const s = time % 60;
  return { m, s };
};

/**
 *
 * @param {Object} timeObject
 * @returns
 */

// 시간을 출력 형식으로 바꾸는 함수
const convertFormat = (timeObject) => {
  const { m, s } = timeObject;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

class Video {
  constructor(video_len, op_start, op_end, pos) {
    this.video_len = convertSeconds(video_len);
    this.op_start = convertSeconds(op_start); // 변하지 않는 값
    this.op_end = convertSeconds(op_end); // 변하지 않는 값
    this.pos = convertSeconds(pos);
  }
  get getPos() {
    return this.pos;
  }

  set setPos(pos) {
    this.pos = pos;
  }
  // 오프닝 시간 스킵하는  펑션
  skipOpening() {
    if (this.op_start <= this.pos && this.pos <= this.op_end) {
      this.setPos = this.op_end;
    }
  }
  // 이전 버튼을 누른 후 실행되는 펑션
  prevFunc() {
    this.setPos = Math.max(0, this.pos - 10);
  }

  // 다음 버튼을 누른 후 실행되는 펑션
  nextFunc() {
    this.setPos = Math.min(this.video_len, this.pos + 10);
  }
}

function solution(video_len, pos, op_start, op_end, commands) {
  const video = new Video(video_len, op_start, op_end, pos);
  video.skipOpening();
  for (const command of commands) {
    if (command === "next") {
      video.nextFunc();
    }
    if (command === "prev") {
      video.prevFunc();
    }
    video.skipOpening();
  }

  const finalPos = video.getPos;
  const timeObj = convertMinutesAndSeconds(finalPos);
  return convertFormat(timeObj);
}
