/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const util = require('../lib/util');
const CustsItmsDtlsSrvc = require('../services/CustsItmDtlsSrvc');
const token = require('../tokens');
const CustsItmVldn = require('./CustsItmVldn');
const SetRes = require('../SetRes');

// ---------------------- BEGIN: Customer Items APIs ---------------------- //
const apiServerStatus = (req, res) => {
  const resObj = SetRes.apiServerStatus();
  util.sendApiResponse(res, resObj);
}

// BEGIN: Custs Items Dtls View
const viewCustsItemDtls = (req, res) => {
  const vwVldn = CustsItmVldn.detailsViewValidation(req);
  if (vwVldn.flag) {
    if(req.headers.kmvcatoken) {
      const dtData = token.kaiaMartRefreshToken(req.headers.kmvcatoken, res);
      const tv = CustsItmVldn.tokenValidation(dtData);
      if (tv.flag) {
        CustsItmsDtlsSrvc.viewCustsItemDtls(req.body, dtData.tokenData, (resObj) => {
          util.sendApiResponse(res, resObj);
        });
      } else {
        const tr = tv.result;
        util.sendApiResponse(res, tr);
      }
    } else {
      CustsItmsDtlsSrvc.viewCustsItemDtls(req.body, {}, (resObj) => {
        util.sendApiResponse(res, resObj);
      });
    }
  } else {
    const vr = vwVldn.result;
    util.sendApiResponse(res, vr);
  }
};
//  END: Custs Items Dtls List View

module.exports = {
  apiServerStatus, viewCustsItemDtls
};
