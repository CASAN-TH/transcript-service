'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TranscriptSchema = new Schema({
    name: {
        type: String,
        required: 'Please fill a Transcript name',
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Transcript", TranscriptSchema);