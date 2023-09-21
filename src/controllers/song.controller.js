const Song = require("../models/song.model.js");
// Retrieve all Songs from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Song.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};