const Effect = require("../Effect");
const Unit = require("../Unit");
const { InvalidTargetError } = require("../../Errors");

describe("create", () => {
  const payload = {
    name: "Hard Algorithm",
    cost: 2,
    text: "increase target's resilience by 3",
    stat: "resilience",
    magnitude: 3,
  };
  it("should return Effect object", () => {
    const result = Effect.create(payload);
    expect(result).toMatchInlineSnapshot(`
      Effect {
        "cost": 2,
        "magnitude": 3,
        "name": "Hard Algorithm",
        "stat": "resilience",
        "text": "increase target's resilience by 3",
      }
    `);
  });
});

describe("play", () => {
  it("should throw InvalidTargetError if invalid target", () => {
    const effectObject = new Effect(
      "Hard Algorithm",
      2,
      "increase target's resilience by 3",
      "resilience",
      3
    );
    const target = new Effect(
      "Hard Algorithm",
      4,
      "increase target's resilience by 3",
      "resilience",
      6
    );
    expect(() => {
      effectObject.play(target);
    }).toThrow(new InvalidTargetError());
  });
  it("should return target", () => {
    const effectObject = new Effect(
      "Hard Algorithm",
      2,
      "increase target's resilience by 3",
      "resilience",
      3
    );
    const target = new Unit("Red Belt Ninja", 3, 3, 4);
    const result = effectObject.play(target);
    expect(result).toMatchInlineSnapshot(`
      Unit {
        "cost": 3,
        "name": "Red Belt Ninja",
        "power": 3,
        "resilience": 7,
      }
    `);
  });
});
