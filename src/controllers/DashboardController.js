const Spot = require('../models/SpotModel');

module.exports = {
  async show(req, res) {
    const { userid } = req.headers;

    const spots = await Spot.find({ user: userid });

    return res.json(spots);
  },
};
