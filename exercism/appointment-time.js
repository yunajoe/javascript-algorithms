// @ts-check

/**
n(일 수)과 기준 시간(now, 선택 사항)을 인자로 받아, 현재 시간 기준으로 n일 뒤의 예약 시간을 반환
*/
/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const plusDays = days * 24 * 60 * 60 * 1000; // 밀리초로 변환
  const baseTime =
    now !== undefined ? new Date(now).getTime() : new Date().getTime();
  const date = new Date(baseTime + plusDays);
  return date;
}

/**
Date 객체를 인자로 받아, 국제 표준화 포맷인 ISO 8601 타임스탬프 문자열로 변환하여 반환
*/
/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */

export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
  ISO 8601 형식의 타임스탬프 문자열을 인자로 받아, 연도, 월, 일, 시, 분 정보를 담은 객체로 반환
*/
/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const date = dateObject.getDate();
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();
  return {
    year,
    month,
    date,
    hour,
    minute,
  };
}

/**
첫 번째 인자로 예약 시간(문자열), 두 번째 인자로 수정할 옵션 객체를 받아, 옵션 내용에 맞게 날짜를 업데이트한 새로운 예약 날짜
*/
/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */

export function updateAppointment(timestamp, options) {
  const dateObject = new Date(timestamp);
  const { year, month, date, hour, minute } = options;
  if (year !== undefined) {
    dateObject.setFullYear(year);
  }
  if (month !== undefined) {
    dateObject.setMonth(month);
  }
  if (date !== undefined) {
    dateObject.setDate(date);
  }
  if (hour !== undefined) {
    dateObject.setHours(hour);
  }
  if (minute !== undefined) {
    dateObject.setMinutes(minute);
  }
  return {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth(),
    date: dateObject.getDate(),
    hour: dateObject.getHours(),
    minute: dateObject.getMinutes(),
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const object1 = new Date(timestampA);
  const object2 = new Date(timestampB);
  const diff =
    Math.max(object1.getTime(), object2.getTime()) -
    Math.min(object1.getTime(), object2.getTime());
  return Math.round(diff / 1000);
}

/**
예약 시간(타임스탬프 문자열)과 기준 현재 시간(타임스탬프 문자열)을 인자로 받아, 예약 시간이 현재 시간보다 미래인지 여부를 불리언(true/false)로 반환
*/
/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */

export function isValid(appointmentTimestamp, currentTimestamp) {
  // 예약 시간이 현재시간 보다 크면은 true / 아니면 false
  const time1 = new Date(appointmentTimestamp).getTime();
  const time2 = new Date(currentTimestamp).getTime();

  return time1 > time2;
}
