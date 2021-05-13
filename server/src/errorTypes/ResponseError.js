// this comment is redundant
/** Class representing a ResponseError. */
class ResponseError extends Error {
  /**
   * Create a ResponseError.
   * @param {string} message - The message value.
   */
  constructor(message) {
    super(message);
    this.errorCode = 400;
  }
}

module.exports = ResponseError;
