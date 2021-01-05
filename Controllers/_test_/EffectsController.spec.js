const { createEffect } = require("../EffectsController");

describe("createEffect", () => {
  const payload = {
    name: "Hard Algorithm",
    cost: 2,
    text: "increase target's resilience by 3",
    stat: "resilience",
    magnitude: 3,
  };
  it("should return Effect object", async () => {
    const result = await createEffect(payload);
    expect(result).toMatchInlineSnapshot(`
      Effect {
        "cost": 2,
        "magnitute": 3,
        "name": "Hard Algorithm",
        "state": "resilience",
        "text": "increase target's resilience by 3",
      }
    `);
  });
});
