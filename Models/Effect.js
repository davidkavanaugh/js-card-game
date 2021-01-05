const Card = require("./Card");
const Unit = require("./Unit");
const { InvalidTargetError } = require("../Errors");

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    (this.text = text), (this.stat = stat), (this.magnitude = magnitude);
  }
  static create(payload) {
    console.log("creating effect");
    try {
      const { name, cost, text, stat, magnitude } = payload;
      const newEffect = new Effect(name, cost, text, stat, magnitude);
      console.log(`${newEffect.name} created`);
      return newEffect;
    } catch (err) {
      throw Error("server error");
    }
  }
  play(target) {
    console.log(`playing ${this.name} on ${target.name}`);
    if (target instanceof Unit) {
      if (this.stat === "resilience") {
        target.resilience += this.magnitude;
      }
      if (this.stat === "power") {
        target.power += this.magnitude;
      }
    } else {
      throw new InvalidTargetError();
    }
    return target;
  }
}

module.exports = Effect;
