const { createUnit } = require("../UnitsController");
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
