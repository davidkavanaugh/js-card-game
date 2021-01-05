const Unit = require("../Unit");
const Effect = require("../Effect");
const { InvalidTargetError } = require("../../Errors");

describe("attack", () => {
  it("should throw InvalidTargetError if invalid target", () => {
    const unitObject = new Unit("Red Belt Ninja", 3, 3, 4);
    const target = new Effect(
      "Hard Algorithm",
      2,
      "increase target's resilience by 3",
      "resilience",
      3
    );
    expect(() => {
      unitObject.attack(target);
    }).toThrow(new InvalidTargetError());
  });
  it("should return updated Effect object", () => {
    const unitObject = new Unit("Red Belt Ninja", 3, 3, 4);
    const target = new Unit("Black Belt Ninja", 5, 4, 3);

    const result = unitObject.attack(target);
    expect(result).toMatchInlineSnapshot(`
      Unit {
        "cost": 3,
        "name": "Red Belt Ninja",
        "power": 3,
        "resilience": 4,
      }
    `);
  });
});
