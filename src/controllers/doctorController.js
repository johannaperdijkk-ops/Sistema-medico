const { doctors } = require("../data/mockData");

function getDoctors(req, res) {
  return res.status(200).json({
    message: "Doctor list retrieved successfully",
    data: doctors
  });
}

module.exports = {
  getDoctors
};