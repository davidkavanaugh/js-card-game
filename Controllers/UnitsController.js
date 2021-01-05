const Unit = require("../Models/Unit");

const createUnit = async (payload) => {
  try {
    const { name, cost, power, resilience } = payload;
    const newUnit = await new Unit(name, cost, power, resilience);
    return newUnit;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createUnit,
};
