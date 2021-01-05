const Effect = require("../Models/Effect");

const createEffect = (payload) => {
  try {
    const { name, cost, text, stat, magnitude } = payload;
    const newEffect = new Effect(name, cost, text, stat, magnitude);
    return newEffect;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createEffect };
