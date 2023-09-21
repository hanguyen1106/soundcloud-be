module.exports = app => {
    const songs = require("../controllers/song.controller.js");
    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", songs.findAll);

    app.use('/api/songs', router);
  };