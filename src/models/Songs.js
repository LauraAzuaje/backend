const { Schema, model } = require("mongoose");

const songSchema = new Schema({
    title: { type: String, required:true },
    genre: { type: String, required: true },
    artist: { type: String, required: true }
},{
    timestamps: true,
    versionKey: false,
});

module.exports = model("Songs", songSchema);