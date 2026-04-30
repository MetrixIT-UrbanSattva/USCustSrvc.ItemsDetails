/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */


// ---------------------- BEGIN: Mobile Login APIs ---------------------- //
const kmMobSendLoginOtp = (reqBody, res, callback) => {
  const resObj = {httpStatus: 200, status: '200', resData: {message: 'Kaia Mart Vendor Customers - API server is running'}};
  callback(resObj);
}
// ---------------------- END: Mobile Login APIs ---------------------- //

module.exports = {
  kmMobSendLoginOtp
}
