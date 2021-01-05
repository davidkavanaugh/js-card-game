const Unit = require("./Models/Unit");
const Effect = require("./Models/Effect");

const RedBeltNinja = Unit.create({
  name: "Red Belt Ninja",
  cost: 3,
  power: 3,
  resilience: 4,
});
console.log(RedBeltNinja);

const HardAlgorithm = Effect.create({
  name: "Hard Algorithm",
  cost: 2,
  text: "increase target's resilience by 3",
  stat: "resilience",
  magnitude: 3,
});
HardAlgorithm.play(RedBeltNinja);
console.log(RedBeltNinja);

const BlackBeltNinja = Unit.create({
  name: "Black Belt Ninja",
  cost: 4,
  power: 5,
  resilience: 4,
});
console.log(BlackBeltNinja);

const UnhandledPromiseRejection = Effect.create({
  name: "Unhandled Promise Rejection",
  cost: 1,
  text: "reduce target's resilience by 2",
  stat: "resilience",
  magnitude: -2,
});
UnhandledPromiseRejection.play(RedBeltNinja);
console.log(RedBeltNinja);

const PairProgramming = Effect.create({
  name: "Pair Programming",
  cost: 3,
  text: "increase target's power by 2",
  stat: "power",
  magnitude: 2,
});
PairProgramming.play(RedBeltNinja);
console.log(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);
console.log(BlackBeltNinja);
