/// <reference path="..//global.d.ts" />
// @ts-check

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  async free(text) {
    const { translation } = await this.api.fetch(text);
    return translation;
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  async batch(texts) {
    if (texts.length === 0) {
      throw new BatchIsEmpty();
    }

    const promises = texts.map(async (text) => {
      const { translation } = await this.api.fetch(text);
      return translation;
    });

    return Promise.all(promises);
  }

  /**
   * Requests the service for some text to be translated.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  async request(text) {
    let retry = 3;
    let lastError = null;

    while (retry > 0) {
      try {
        await new Promise((resolve, reject) => {
          this.api.request(text, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(undefined);
            }
          });
        });
        return undefined;
      } catch (error) {
        lastError = error;
        retry--;
      }
    }

    throw lastError;
  }

  /**
   * Retrieves the translation for the given text
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
    try {
      const { quality, translation } = await this.api.fetch(text);
      if (quality >= minimumQuality) {
        return translation;
      }
      throw new QualityThresholdNotMet(text);
    } catch (error) {
      if (error instanceof QualityThresholdNotMet) {
        throw error;
      }

      // API fetch 실패 시 request를 통해 번역을 요청하고 다시 premium 호출
      await new Promise((resolve, reject) => {
        this.api.request(text, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(undefined);
          }
        });
      });

      return this.premium(text, minimumQuality);
    }
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
      `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
      `.trim(),
    );
  }
}
