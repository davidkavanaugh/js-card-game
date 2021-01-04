import * as UnitsController from "../UnitsController";

describe("createUnit", () => {
  const payload = {
    name: "Red Belt Ninja",
    cost: 3,
    power: 3,
    resilience: 4,
  };
  const { name, cost, power, resilience } = payload;
  it("should return Unit object", async () => {
    const result = await UnitsController.createUnit(
      name,
      cost,
      power,
      resilience
    );
    expect(result).toMatchInlineSnapshot();
  });
});
