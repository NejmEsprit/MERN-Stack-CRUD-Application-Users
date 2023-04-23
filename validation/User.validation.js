const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.LastName = !isEmpty(data.LastName) ? data.LastName : "";
  data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";
 
  if (!validator.isEmail(data.Email)) {
    errors.Email = "Format Email required";
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email";
  }
  if (validator.isEmpty(data.LastName)) {
    errors.LastName = "Required Lastname";
  }
  if (validator.isEmpty(data.FirstName)) {
    errors.FirstName = "Required Firstname";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required age";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};