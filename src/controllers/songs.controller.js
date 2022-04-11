const songsController = {};
const Songs = require('../models/Songs');

songsController.getSongs = async (req, res) => {
    const songs = await Songs.find();
    res.json(songs);
};
songsController.getSong = async (req, res) => {
    let buscar = req.params.id;
    const song = await Songs.find({
        $or:[
            {title: {"$regex": `${buscar}`, "$options": "i"}},
            {artist: {"$regex": `${buscar}`, "$options": "i"}},
            {genre: {"$regex": `${buscar}`, "$options": "i"}}
        ]
    });
    res.json(song);
};
songsController.postSong = async (req, res) => {
    const newSong = new Songs(req.body);
    await newSong.save();
    res.send({message: 'Song created'});
}

module.exports = songsController;