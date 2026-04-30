/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

var config = require('config');
var mongoose = require('mongoose');
var {v4: uuidv4} = require('uuid');

mongoose.createConnection(config.mongoDBConnection, {useUnifiedTopology: true, useNewUrlParser: true});
const Schema = mongoose.Schema;

// --- Begin: Customers Item Files Closed Schema --- //
const schema = new Schema({
  _id: {type: String, default: uuidv4()},
  citdc: {type: String, ref: config.collCustsItemDtlsClsd, required: true}, // Customers Item Details - Record ID

  vndrOrg: {type: String, required: true}, // ref: config.collVndrsOrgs: VNDR0001
  voName: {type: String, required: true}, // Urban Sattva
  voCode: {type: String, required: true}, // US0001

  item: {type: String, required: true},
  itemCode: {type: String, required: true},
  voItem: {type: String, required: false}, // ref: config.collVndrsOrgsItemsUnits
  voiCode: {type: String, required: false}, // Vendors Organizations Item Code

  fRakam: {type: String, required: true}, // Type: Image, Video
  fSeq: {type: Number, default: 0}, // File Sequence
  fdt: {type: String, required: true}, // File for Device Type: Desktop, Mobile, Tab, All
  dispName: {type: String, required: true, trim: true},
  name: {type: String, required: true},
  path: {type: String, required: true},

  delFlag: {type: Boolean, default: false}, // Deleted Flag
  cuRakam: {type: String, required: true}, // Created User Type
  cUser: {type: String, required: true, trim: true}, // Created Users._id
  cUserName: {type: String, required: true}, // Created Users.pName
  cDtStr: {type: String, required: true}, // Date & Time String - Format = YYYY-MM-DD HH:mm:ss
  cDtNum: {type: Number, required: true}, // Date & Time Number
  uuRakam: {type: String, required: true}, // Updated User Type
  uUser: {type: String, required: true, trim: true}, // Updated Users._id
  uUserName: {type: String, required: true}, // Updated Users.pName
  uDtStr: {type: String, required: true}, // Date & Time String - Format = YYYY-MM-DD HH:mm:ss
  uDtNum: {type: Number, required: true}, // Date & Time Number
}, {collection: config.collCustsItemFilesClsd});

schema.index({vndrOrg: 1, citdc: 1, voiCode: 1, fdt: 1, path: 1}, {unique: true});
schema.index({delFlag: 1, fSeq: 1, cDtNum: -1, uDtNum: -1});

module.exports = mongoose.model(config.collCustsItemFilesClsd, schema);
// --- End: Customers Item Files Closed Schema --- //
