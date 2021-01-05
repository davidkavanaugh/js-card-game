const { createUnit, updateUnit } = require("../UnitsController");
const Unit = require("../../Models/Unit");
const payload = {
  name: "Red Belt Ninja",
  cost: 3,
  power: 3,
  resilience: 4,
};
describe("createUnit", () => {
  it("should return Unit object", () => {
    const result = createUnit(payload);
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

describe("updateUnit", () => {
  it("should return updated Unit object", () => {
    let target = new Unit("foobar", 2, 2, 5);
    const result = updateUnit(target, payload);
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
