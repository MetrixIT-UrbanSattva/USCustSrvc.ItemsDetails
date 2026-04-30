
const SetRes = require('../SetRes');
const userType = 'VC User';

const detailsViewValidation = (req) => {
  const reqBody = req.body;
  if (!reqBody.id) {
    const mandatoryResult = SetRes.mandatory();
    return { flag: false, result: mandatoryResult };
  } else {
    return { flag: true };
  }
};

const filesViewValidation = (req) => {
  const reqBody = req.body;
 if (!reqBody.itemId) {
    const mandatoryResult = SetRes.mandatory();
    return { flag: false, result: mandatoryResult };
  } else {
    return { flag: true };
  }
};

const tokenValidation = (tData) => {
  if(!tData) {
    const it = SetRes.tokenInvalid();
    return {flag: false, result: it};
  } else if(tData.isExpired) {
    const te = SetRes.tokenExpired();
    return {flag: false, result: te};
  } else if(tData.tokenData && tData.tokenData.ur != userType) {
    const ad = SetRes.invalidAccess();
    return {flag: false, result: ad};
  } else {
    return {flag: true};
  }
};

module.exports = {
  detailsViewValidation,
  filesViewValidation,
  tokenValidation
}