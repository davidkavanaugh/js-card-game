class InvalidTargetError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidTargetError";
  }
}

module.exports = {
  InvalidTargetError,
};
