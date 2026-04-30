/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

// ---------------------- BEGIN: Customer Items APIs ---------------------- //

const viewCustsItemFls = (reqBody, tokenData) => {
  const vndrOrg = tokenData && tokenData.iss ? {vndrOrg : tokenData.vid } : {};
  const voitem = reqBody.voitem ? { voitem : reqBody.voitem } : {};
  const query = { delFlag: false, ...voitem, item: reqBody.itemId, ...vndrOrg};
  const query2 = {  ...voitem, item: reqBody.itemId, ...vndrOrg};

  return { query, query2 };
};

const sendResData = (resObj, value) => {
  const unitsId = value == 'open' ? {unitsId: resObj.citd} : {unitsId: resObj.citdc};

  return {
    _id: resObj._id,
    vendorOrg: resObj.vndrOrg,
    vendorOrgItemCode: resObj.voiCode,
    ...unitsId,

    item: resObj.item,
    itemCode: resObj.itemCode,
    voItem: resObj.voItem,
    voiCode: resObj.voiCode,

    itemSection: resObj.vibagam,
    packType: resObj.ipPack === 'false' ? 'Regular' : 'Premium',
    itemCategory: resObj.vargam,
    itemCommonName: resObj.icn,
    itemName: resObj.itemPeru,

    fileType: resObj.rakam,
    fileSequence: resObj.fSeq,
    displayName: resObj.dispName,
    name: resObj.name,
    path: resObj.path,

    createdAt: resObj.cDtStr
  }
}
// ---------------------- End: Customer Items APIs ---------------------- //

module.exports = {
  viewCustsItemFls,
  sendResData
}
