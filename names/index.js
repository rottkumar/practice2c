const utilityfunction = require("../utilities/utils/index");
const peoplenames = require("../country/state/city/index");

module.exports = utilityfunction(peoplenames);

const getPeopleInCity = (peoplenames) => {
  return utilityfunction(peoplenames);
};

module.exports = getPeopleInCity;
console.log(utilityfunction(peoplenames));
