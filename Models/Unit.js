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
      console.log(`${this.name} attacks ${target.name}`);
      target.resilience -= this.power;
      return this;
    } else {
      throw new InvalidTargetError();
    }
  }
  static create(payload) {
    console.log("creating unit");
    try {
      const { name, cost, power, resilience } = payload;
      const newUnit = new Unit(name, cost, power, resilience);
      console.log(`${newUnit.name} created`);
      return newUnit;
    } catch (err) {
      throw Error("server error");
    }
  }
}

module.exports = Unit;
