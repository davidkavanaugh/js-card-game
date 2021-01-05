const Card = require("./Card");
const { InvalidTargetError } = require("../Errors");

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.resilience -= this.power;
      return this;
    } else {
      throw new InvalidTargetError();
    }
  }
}

module.exports = Unit;
