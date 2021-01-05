const Card = require("./Card");
class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name);
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }
}

module.exports = Unit;
