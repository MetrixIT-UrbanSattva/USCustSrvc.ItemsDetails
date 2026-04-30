/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

// ---------------------- BEGIN: Customer Items APIs ---------------------- //

const viewCustsItemDtls = (reqBody, tokenData) => {
  const vndrOrg = tokenData && tokenData.iss ? {vndrOrg : tokenData.vid } : {};
  const query = { delFlag: false, _id: reqBody.id, ...vndrOrg };
  const query2 = { item: reqBody.itemId, ...vndrOrg};
  return { query, query2 };
};

const sendResData = (resObj) => {
  return {
    _id: resObj._id,
    vendorOrg: resObj.vndrOrg,
    vendorOrgName: resObj.voName,
    vendorOrgCode: resObj.voCode,
    vendorOrgContract: resObj.voc,
    vendorOrgContractCode: resObj.vocCode,

    item: resObj.item,
    itemCode: resObj.itemCode,
    voItem: resObj.voItem,
    voiCode: resObj.voiCode,
    

    itemSection: resObj.vibagam,
    packType: resObj.ipPack === 'false' ? 'Regular' : 'Premium',
    itemGroup: resObj.samuham,
    itemCategory: resObj.vargam,
    itemSubCategory: resObj.upaVargam,
    itemType: resObj.rakam,
    
    about: resObj.about,
    techDtls: resObj.techDtls,
    points: resObj.points,
    
    madeCountry: resObj.madeCountry,
    headQuarters: resObj.hqMain,

    maker: resObj.maker,
    make: resObj.make,
    model: resObj.model,
    itemCommonName: resObj.icn,
    itemName: resObj.itemPeru,

    status: resObj.hoda,

    createdAt: resObj.cDtStr
  }
}
// ---------------------- End: Customer Items APIs ---------------------- //

module.exports = {
  viewCustsItemDtls,
  sendResData
}
