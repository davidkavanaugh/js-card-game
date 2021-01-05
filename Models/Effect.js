const Card = require("./Card");
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    (this.text = text), (this.state = stat), (this.magnitute = magnitude);
  }
  play(target) {
    if (target instanceof Unit) {
      target.stat += this.magnitute;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

module.exports = Effect;
