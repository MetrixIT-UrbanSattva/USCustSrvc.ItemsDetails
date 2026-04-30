/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const logger = require('../lib/logger');
const SetRes = require('../SetRes');
const custsItemsDtlsSchema = require('../schemas/CustsItemDtls');
const custsItemsDtlsClsdSchema = require('../schemas/CustsItemDtlsClsd');
const CustsItmDtlsDaoImpl = require('../daosimplements/CustsItmDtlsDaoImpl');

// ---------------------- BEGIN: Customer Items Dtls APIs ---------------------- //

// BEGIN: Custs Items Dtls View 
const viewCustsItemDtls = (obj, callback) => {
  custsItemsDtlsSchema.findOne(obj.query, (error, resObj) => {
      if (error) {
        logger.error('Un-konwn Error occured in daos/CustsItmDtlsDao.js, at viewCustsItemDtls:' + error);
        const err = SetRes.unKnownErr({});
        callback(err);
      } else if (resObj && resObj._id) {
        const resData = CustsItmDtlsDaoImpl.sendResData(resObj);
        const result = SetRes.responseData(resData);
        callback(result);
      } else {
        viewCustsItemDtlsClsd(obj.query2, callback);
      }
    })    
};
// END: Custs Items Dtls View  

// BEGIN: Custs Items Dtls Clsd View 
const viewCustsItemDtlsClsd = (query, callback) => {
  custsItemsDtlsClsdSchema.findOne(query, (error, resObj) => { 
    if (error) {
      logger.error('Un-konwn Error occured in daos/CustsItmDtlsDao.js, at viewCustsItemDtlsClsd:' + error);
      const err = SetRes.unKnownErr({});
      callback(err);
    } else if (resObj && resObj._id) {
      const resData = CustsItmDtlsDaoImpl.sendResData(resObj);
      const result = SetRes.responseData(resData);
      callback(result);
    } else {
      const noData = SetRes.noData([]);
      callback(noData);
    }
  })    
}
// END: Custs Items Dtls Clsd View  
// ---------------------- END: Customer Items Dtls APIs ---------------------- //

module.exports = {
  viewCustsItemDtls,
  viewCustsItemDtlsClsd
}
