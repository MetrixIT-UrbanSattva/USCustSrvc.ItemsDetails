/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const util = require('../lib/util');
const CustsItmsFlsSrvc = require('../services/CustsItmFlsSrvc');
const token = require('../tokens');
const CustsItmVldn = require('../controllers/CustsItmVldn')

// ---------------------- BEGIN: Customer Items Fls APIs ---------------------- //

// BEGIN: View Custs Item Fls
const viewCustsItemFls = (req, res) => {
  const vwVldn = CustsItmVldn.filesViewValidation(req);
  if (vwVldn.flag) {
    if (req.headers.kmvcatoken) {
      const dtData = token.kaiaMartRefreshToken(req.headers.kmvcatoken, res);
      const tv = CustsItmVldn.tokenValidation(dtData);
      if (tv.flag) {
        CustsItmsFlsSrvc.viewCustsItemFls(req.body, dtData.tokenData, (resObj) => {
          util.sendApiResponse(res, resObj);
        });
      } else {
        const tr = tv.result;
        util.sendApiResponse(res, tr);
      }
    } else {
      CustsItmsFlsSrvc.viewCustsItemFls(req.body, {}, (resObj) => {
        util.sendApiResponse(res, resObj);
      });
    }
  } else {
    const vr = vwVldn.result;
    util.sendApiResponse(res, vr);
  }
};
//  END: View Custs Item Fls 

// ---------------------- ENd: Customer Items Fls APIs ---------------------- //


module.exports = {
  viewCustsItemFls
}
