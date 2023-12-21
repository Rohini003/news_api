// const { mongoose } = require('database-module');
const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true
    },
    heading: {
        type: String,
        required: true
    },
    news_item: {
        type: String,
        required: true
    },
    url : {
        type : String,
        required: true
    },
    created_by: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    updated_by: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
})

const news =  mongoose.models.News || mongoose.model('News', newsSchema);
module.exports = {news}