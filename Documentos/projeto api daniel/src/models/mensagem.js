'use strict';

const Schema = mongoose.Schema;
const schema = new Schema({
    seqNumber: {
        type: String,
        required: true
    },
    deviceid: {
        type: String,
        required: true
    },
    temp: {
        type: String,
        required: true
    },
    datetime: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('mensagem', schema);