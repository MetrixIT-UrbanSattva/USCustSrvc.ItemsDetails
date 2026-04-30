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

// --- Begin: Customers Item Details Closed Schema --- //
const schema = new Schema({
  _id: {type: String, default: uuidv4()},

  vndrOrg: {type: String, required: true}, // ref: config.collVndrsOrgs: VNDR0001
  voName: {type: String, required: true}, // Urban Sattva
  voCode: {type: String, required: true}, // US0001
  voc: {type: String, required: true}, // ref: config.collVndrsOrgsContracts
  vocCode: {type: String, required: true},

  item: {type: String, required: true}, // ref: config.collVndrsOrgsItems
  itemCode: {type: String, required: true},
  voItem: {type: String, required: true}, // ref: config.collVndrsOrgsItemsUnits
  voiCode: {type: String, required: true}, // Vendor Organizations Item Code

  vibagam: {type: String, required: true}, // Item Section: Regular, Premium(Organic, Natural, etc)
  ipPack: {type: Boolean, default: false}, // Is Premium Package
  samuham: {type: String, required: true}, // Item Group: Premium(Quality), Regular, Organic, Natural, etc...
  vargam: {type: String, required: true}, // Item Category: Pulses, Cereals, Millets, Oils, Spices, Dry Fruits, Powders, Flours
  upaVargam: {type: String, required: false}, // Item Sub Category: Toor Dal, Urad Dal, etc
  rakam: {type: String, required: false, trim: true}, // Item Type or Sub Sub Category
  madeCountry: {type: String, required: false, trim: true}, // Origin Country
  hqMain: {type: String, required: false, trim: true}, // Main Head Quarters
  maker: {type: String, required: true, trim: true}, // Maker/Producer/Manufacturer: KaiaMart
  make: {type: String, required: true, trim: true}, // Make/Brand: Mills2Home
  model: {type: String, required: false, trim: true}, // Model: 
  icn: {type: String, required: true}, // Item Common Name: Toor Dal
  itemPeru: {type: String, required: true, trim: true}, // Telangana Toor Dal

  hoda: {type: String, required: true}, // Sale to Customer Status: Active, Inactive, Removed, Closed
  about: [{ // About Item
    _id: {type: String, default: uuidv4()},
    title: {type: Boolean, required: false}, // Heading of Description
    fPst: {type: String, required: false}, // File Position: Left, Right, Full (Default Full)
    fPaths: {type: [String], required: false}, // File Paths
    seq: {type: Number, default: 0}, // Points Sequence
    desc: {type: String, required: false} // Description
  }],

  techDtls: [{
    _id: {type: String, default: uuidv4()},
    seq: {type: Number, default: 0}, // Tech Details Sequence
    label: {type: String, required: true},
    value: {type: String, required: true},
    isImp: {type: Boolean, required: false}
  }],

  points: [{
    _id: {type: String, default: uuidv4()},
    seq: {type: Number, default: 0}, // Points Sequence
    point: {type: String, required: true}
  }],

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
}, {collection: config.collCustsItemDtlsClsd});

schema.index({vndrOrg: 1, voiCode: 1}, {unique: true});
schema.index({delFlag: 1, hoda: 1});

module.exports = mongoose.model(config.collCustsItemDtlsClsd, schema);
// --- End: Customers Item Details Closed Schema --- //
