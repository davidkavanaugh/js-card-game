const Card = require("./Card");
const Unit = require("./Unit");
const { InvalidTargetError } = require("../Errors");

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    (this.text = text), (this.stat = stat), (this.magnitute = magnitude);
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat === "resilience") {
        target.resilience += this.magnitute;
      }
      if (this.stat === "power") {
        target.power += this.magnitute;
      }
    } else {
      throw new InvalidTargetError();
    }
    return target;
  }
}

module.exports = Effect;
