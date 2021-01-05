const Effect = require("../Models/Effect");

const createEffect = async (payload) => {
  try {
    const { name, cost, text, stat, magnitude } = payload;
    const newEffect = await new Effect(name, cost, text, stat, magnitude);
    return newEffect;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createEffect,
};
