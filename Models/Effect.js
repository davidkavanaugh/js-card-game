const Card = require("./Card");
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    (this.text = text), (this.state = stat), (this.magnitute = magnitude);
  }
}

module.exports = Effect;
