// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  /**
   * @param {number} temperature
   */
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("error");
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) throw new ArgumentError();
  if (typeof temperature === "number" && temperature > 500)
    throw new OverheatingError(temperature);
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const { check, alertDeadSensor, alertOverheating, shutdown } = actions;
  try {
    check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      const temp = error.temperature;
      if (temp < 600) {
        alertOverheating();
      } else if (temp > 600) {
        shutdown();
      }
    } else {
      throw error;
    }
  }
}
