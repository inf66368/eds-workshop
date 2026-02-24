/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(",");
    }
  });
  globals.functions.submitForm(data, true, "application/json");
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * Masks the first 5 digits of the mobile number with *
 * @param {*} mobileNumber
 * @returns {string} returns the mobile number with first 5 digits masked
 */
function maskMobileNumber(mobileNumber) {
  if (!mobileNumber) {
    return "";
  }
  const value = mobileNumber.toString();
  // Mask first 5 digits and keep the rest
  return ` ${"*".repeat(5)}${value.substring(5)}`;
}

/**
 * Masks the first 5 digits of the mobile number with *
 * @name maskOtpText Mask Number in OTP Text
 * @param {*} mobileNumber
 * @returns {string} returns text with predefined text and first 5 digits masked
 */
function maskOtpText(mobileNumber) {
  if (!mobileNumber) {
    return `We've sent a 6-digit OTP to your registered mobile number ${mobileNumber}.`;
  }

  let number = mobileNumber.toString();

  number = "*".repeat(5) + number.substring(5);

  return `We've sent a 6-digit OTP to your registered mobile number ${number}.`;
}

/**
 * Validates if a given string is a valid mobile number.
 * Accepts mobile numbers in Indian format with optional country code (0 or 91).
 * Valid numbers must start with 6-9 and contain 10 digits after the prefix.
 * @name validateMobileNumber Validate Number
 * @param {string} mobileNumber - The mobile number to validate
 * @returns {boolean} True if the mobile number is valid, false otherwise
 */
function validateMobileNumber(mobileNumber) {
  const numberPattern = /^(0|91)?[6-9]\d{9}$/;
  return numberPattern.test(mobileNumber);
}


/**
 * Calculates the monthly interest rate from an annual interest rate.
 * @param {number} annualRate - The annual interest rate as a percentage
 * @returns {number} The monthly interest rate as a decimal
 */
function monthlyInterestRate(annualRate) {
  return annualRate / (12 * 100);
}

/**
 * Calculate Equated Monthly Installment (EMI).
 * @param {number} principal - Principal (loan amount), must be > 0
 * @param {number} tenure - Number of months
 * @param {number} roi - Monthly interest rate
 * @returns {number} - EMI per month
 */
function calculateEMI(principal, tenure, roi) {

  if (roi === 0) return Math.ceil(principal / tenure);

  const R = 1 + roi;
  const expo = R ** tenure;
  let emi = Math.round((principal * roi * expo) / (expo - 1));

  return emi;
}

/**
 * Formats a number according to Indian numbering system (with commas).
 * @name formatIndianNumber Format Number
 * @param {number} value - The number to format
 * @returns {string} The formatted number string in Indian locale format
 */
function formatIndianNumber(value) {
  return value.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });
}

/**
 * Formats a numeric value as Indian Rupee (INR) currency string.
 * @name formatINRCurrency Format Currency
 * @param {number|string} value - numeric value to format as currency
 * @returns {string} Formatted currency string in INR format
 */
function formatINRCurrency(value) {
  return Number(value).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });
}

/**
 * Append "months" in number.
 * @name formatTenure Format Tenure
 * @param {number} value - numeric value to format
 * @returns {string} Formatted string with "months"
 */
function formatTenure(value) {
    return `${value} months`;
}

/**
 * Formats a text value by appending additional text to it.
 * @name formatText Format Text
 * @param {string|number} value - The value to format
 * @param {string} appendText - The text to append
 * @returns {string} The appended text with the value
 */
function formatText(value, appendText) {
  if (value && value !== undefined) {
    return `0${appendText}`;
  }
  return `${value}${appendText}`;
}

/**
 * Formats a PAN by masking first 5 characters.
 * @name formatPanNumber Format PAN
 * @param {string} panNumber - The PAN number
 * @returns {string} The formatted PAN with *
 */
function formatPanNumber(panNumber) {
  return `***** *${panNumber.slice(6)}`.toUpperCase();
}

// eslint-disable-next-line import/prefer-default-export
export {
  getFullName,
  days,
  submitFormArrayToString,
  maskMobileNumber,
  maskOtpText,
  validateMobileNumber,
  monthlyInterestRate,
  calculateEMI,
  formatINRCurrency,
  formatIndianNumber,
  formatTenure,
  formatText,
  formatPanNumber
}
