const Booking = require('../models/BookingModel');

module.exports = {
  async store(req, res) {
    const { userid } = req.headers;
    const { spotId } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: userid,
      spot: spotId,
      date,
    });

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate();

    return res.json(booking);
  },
};
