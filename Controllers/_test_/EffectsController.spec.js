const { createEffect } = require("../EffectsController");

describe("createEffect", () => {
  const payload = {
    name: "Hard Algorithm",
    cost: 2,
    text: "increase target's resilience by 3",
    stat: "resilience",
    magnitude: 3,
  };
  it("should return Effect object", () => {
    const result = createEffect(payload);
    expect(result).toMatchInlineSnapshot(`
      Effect {
        "cost": 2,
        "magnitute": 3,
        "name": "Hard Algorithm",
        "stat": "resilience",
        "text": "increase target's resilience by 3",
      }
    `);
  });
});
