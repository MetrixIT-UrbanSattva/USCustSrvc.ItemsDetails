/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const CustsItmDtlsCtrl = require('../../controllers/CustsItmDtlsCtrl');
const CustsItmFlsCtrl = require('../../controllers/CustsItemFlsCtrl');

module.exports.controller = (app) => {

  app.get('/', CustsItmDtlsCtrl.apiServerStatus);

  app.post('/kmvc/item/dtls/view', CustsItmDtlsCtrl.viewCustsItemDtls);
  app.post('/kmvc/item/fls/view', CustsItmFlsCtrl.viewCustsItemFls);
} 
