const { createUnit } = require("../UnitsController");

describe("createUnit", () => {
  const payload = {
    name: "Red Belt Ninja",
    cost: 3,
    power: 3,
    resilience: 4,
  };
  it("should return Unit object", async () => {
    const result = await createUnit(payload);
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
