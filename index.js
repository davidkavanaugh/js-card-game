const { createUnit } = require("./Controllers/UnitsController");
const { createEffect } = require("./Controllers/EffectsController");
// const Unit = require("../../Models/Unit");

const RedBeltNinja = createUnit({
  name: "Red Belt Ninja",
  cost: 3,
  power: 3,
  resilience: 4,
});
console.log(RedBeltNinja);

const HardAlgorithm = createEffect({
  name: "Hard Algorithm",
  cost: 2,
  text: "increase target's resilience by 3",
  stat: "resilience",
  magnitude: 3,
});

HardAlgorithm.play(RedBeltNinja);
console.log(RedBeltNinja);
