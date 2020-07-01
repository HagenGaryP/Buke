const express = require('express');
const router = express.Router();
const { db, Artist, Album, Song } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [{model: Artist}]
    });
    res.json(albums);
  } catch (error) {
    console.log('errorrrrrr', error);
    next(error);
  }
})

router.get('/:albumId', async (req, res, next) => {
  try {
    // findById is deprecated, better to use findByPk, which
    // take in the ID/PK as first arg, and options as second arg.

    // const album = await Album.findById(req.params.albumId, {
      // include: [
      //   { model: Artist },
      //   { model: Song }
      // ]
    // })

    // findOne takes in options as an argument.
    const album = await Album.findOne({  // these are the options
      where: { id: req.params.albumId }, // the conditional
      include: [            // the models to include (inner join)
        { model: Artist },
        { model: Song }
      ]
    })
    res.json(album);
  } catch (error) {
    console.log('errorrrrrr', error);
    next(error);
  }
})

module.exports = router;
