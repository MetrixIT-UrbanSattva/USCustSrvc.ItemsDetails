/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const CustsItmFlsDaoImpl = require('../daosimplements/CustsItmFlsDaoImpl');
const CustsItemsFlsDao = require('../daos/CustsItmFlsDao');

// ---------------------- BEGIN: Customer Items Fls APIs ---------------------- //

// BEGIN: Custs Items Fls View
const viewCustsItemFls = (reqBody, dtData, callback) => {
  const obj = CustsItmFlsDaoImpl.viewCustsItemFls(reqBody, dtData);
  CustsItemsFlsDao.viewCustsItemFls(obj, callback);
}
// END: Custs Items Fls View

// ---------------------- END: Customer Items Fls APIs ---------------------- //

module.exports = {
  viewCustsItemFls
}
