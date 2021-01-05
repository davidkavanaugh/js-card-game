const Unit = require("../Models/Unit");

// const getUnit = async (name) => {
//   try {
//     const unitObject =
//     return unitObject;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

const createUnit = async (payload) => {
  try {
    const { name, cost, power, resilience } = payload;
    const newUnit = await new Unit(name, cost, power, resilience);
    return newUnit;
  } catch (err) {
    throw new Error(err);
  }
};
// const updateUnit = async (payload) => {
//   try {
//     const { name, cost, power, resilience } = payload;
//     const newUnit = await new Unit(name, cost, power, resilience);
//     return newUnit;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

module.exports = {
  // getUnit,
  createUnit,
  // updateUnit,
};
