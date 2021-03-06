'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
    fileName: String,
    fileData: Buffer,
    fileType: String,
    fileLength: String,
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
