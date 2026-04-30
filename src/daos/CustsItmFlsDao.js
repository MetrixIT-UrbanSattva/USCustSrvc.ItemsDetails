/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const custsItemsFlsSchema = require('../schemas/CustsItemFiles');
const custsItemsFlsClsdSchema = require('../schemas/CustsItemFilesClsd');
const CustsItmFlsDaoImpl = require('../daosimplements/CustsItmFlsDaoImpl');
const SetRes = require('../SetRes');

// ---------------------- BEGIN: Customer Items Fls APIs ---------------------- //

// BEGIN: Custs Items Fls View 
const viewCustsItemFls = (obj, callback) => {
  custsItemsFlsSchema.find(obj.query, (error, resObj) => {
    if (error) {
      logger.error('Un-known Error occured in srvc/CustsItmFlsSrvc.js, at viewCustsItemFls:' + error);
      const err = SetRes.unKnownErr({});
      callback(err);
    } else if (resObj && resObj.length > 0) {
      const result = SetRes.responseData(resObj);
      callback(result);
    } else {
      viewCustsItemFlsClsd(obj.query2, callback);
    }
  })
};
// BEGIN: Custs Items Fls View 

// BEGIN: Custs Items Fls Clsd View 
const viewCustsItemFlsClsd = (query, callback) => {
  custsItemsFlsClsdSchema.find(query, (error, resObj) => {
    if (error) {
      logger.error('Un-known Error occured in srvc/CustsItmFlsSrvc.js, at viewCustsItemFlsClsd:' + error);
      const err = SetRes.unKnownErr({});
      callback(err);
    } else if (resObj && resObj.length > 0) {
      const result = SetRes.responseData(resObj);
      callback(result);
    } else {
      const noData = SetRes.noData([]);
      callback(noData);
    }
  })
};
// END: Custs Items Fls Clsd View 

// ---------------------- END: Customer Items Fls APIs ---------------------- //

module.exports = {
  viewCustsItemFls,
  viewCustsItemFlsClsd
}
