/// <reference path="../global.d.ts" />

import { ConnectionError } from "./errors.js";

const mutex = { current: false };
export class ExternalApi {
  /**
   * @param {string} text
   * @returns {Promise<Translation>}
   */

  register(value, translation, quality = undefined) {
    if (typeof this.values[value] === "undefined") {
      this.values[value] = [];
    }
    this.values[value].push(translation ? { translation, quality } : null);
    return this;
  }

  /**
   * @param {string} text
   * @returns {Promise<Translation>}
   */
  fetch(text) {
    if (typeof text !== "string") {
      throw new BadRequest(
        `Expected text when calling fetch(text), actual ${typeof text}.`,
      );
    }
  }
}

function resolveWithRandomDelay(value) {
  const timeout = Math.random() * 3000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), timeout);
  });
}

function rejectWithRandomDelay(value) {
  const timeout = Math.random() * 3000;
  return new Promise((_, reject) => {
    setTimeout(() => reject(value), timeout);
  });
}

function makeRandomError() {
  return new ConnectionError(`Error code ${Math.ceil(Math.random() * 10000)}`);
}

class BadRequest extends Error {
  constructor(message) {
    super(message);
  }
}
