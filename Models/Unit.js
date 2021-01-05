const Card = require("./Card");
class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    target.resilience -= this.power;
  }
}

module.exports = Unit;
