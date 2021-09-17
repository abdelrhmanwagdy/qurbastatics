/**
 * @param  {} name_to_validate
 */
module.exports.validateName = (name_to_validate) => {
  return /^[a-zA-Z ]*$/.test(name_to_validate) && name_to_validate.length > 4
    ? true
    : false;
};


/**
 * @param  {} email_to_validate
 */
validateEmail = (email_to_validate) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email_to_validate
  )
    ? true
    : false;
};

/**
* @param  {} mobile_to_validate
*/
validateMobile = (mobile_to_validate) => {
  return /^01[0125][0-9]{8}$/.test(
    mobile_to_validate
  )
    ? true
    : false;
};


/**
 * @param  {} username_to_validate
 */
validateUserName = (usernmae_to_validate) => {
  return /^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/.test(
    usernmae_to_validate
  ) && usernmae_to_validate.length > 5
    ? true
    : false;
};


/**
 * @param  {} password_to_validate
 */
module.exports.validatePassword = (password_to_validate) => {
  return password_to_validate.length > 5 ? true : false;
};


/**
 * @param  {} loginField_to_validate
 * @desc   check wether the input is email or mobile or username
 */
module.exports.validateLoginField = (loginField) => {
  if (!validateEmail(loginField) && !validateMobile(loginField) && !validateUserName(loginField)) {
    return false;
  } else {
    return true;
  }
};



/**
 * @param  {} resturantName_to_validate
 */
module.exports.validateRestaurantName = (resturantName_to_validate) => {
  return /^([a-zA-Z0-9]+)*$/.test(resturantName_to_validate) && resturantName_to_validate.length > 2
    // return /^[a-zA-Z ]*$/.test(resturantName_to_validate) && resturantName_to_validate.length > 2
    ? true
    : false;
};

/**
* @param  {} address_to_validate
*/
module.exports.validateAdderss = (address_to_validate) => {
  return /^[a-zA-Z0-9]([._-]?[a-zA-Z0-9]+)*$/.test(address_to_validate) && address_to_validate.length > 4
    ? true
    : false;
};


/**
* @param  {} age_to_validate
*/
module.exports.validateAge = (age_to_validate) => {
  if (!isNaN(age_to_validate) && (age_to_validate >= 0) && (age_to_validate <= 500)) {
    return true
  } else {
    return false;
  }

};