const Unit = require("../Models/Unit");

const createUnit = (payload) => {
  try {
    const { name, cost, power, resilience } = payload;
    const newUnit = new Unit(name, cost, power, resilience);
    return newUnit;
  } catch (err) {
    throw new Error(err);
  }
};
const updateUnit = (target, payload) => {
  try {
    const { name, cost, power, resilience } = payload;
    target.name = name;
    target.cost = cost;
    target.power = power;
    target.resilience = resilience;
    return target;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createUnit,
  updateUnit,
};
