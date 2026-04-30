/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const CustsItmDtlsDaoImpl = require('../daosimplements/CustsItmDtlsDaoImpl');
const CustsItemsDao = require('../daos/CustsItmDtlsDao');

// ---------------------- BEGIN: Customer Items Dtls APIs ---------------------- //

// BEGIN: Custs Items Dtls View
const viewCustsItemDtls = (reqBody, dtData, callback) => {
  const obj = CustsItmDtlsDaoImpl.viewCustsItemDtls(reqBody, dtData);
  CustsItemsDao.viewCustsItemDtls(obj, callback);
}
// END: Custs Items Dtls View

// ---------------------- END: Customer Items Dtls APIs ---------------------- //

module.exports = {
  viewCustsItemDtls
}
