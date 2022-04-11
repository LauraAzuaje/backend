const { Router } = require('express');
const router = Router();
const songsController = require('../controllers/songs.controller');

router.get('/', songsController.getSongs);
router.get('/:id', songsController.getSong);
router.post('/', songsController.postSong);

module.exports = router;