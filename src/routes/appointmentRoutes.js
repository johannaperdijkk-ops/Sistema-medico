const express = require("express");
const router = express.Router();
const {
  getAppointments,
  addAppointment,
  editAppointment,
  removeAppointment
} = require("../controllers/appointmentController");

router.get("/", getAppointments);
router.post("/", addAppointment);
router.put("/:id", editAppointment);
router.delete("/:id", removeAppointment);

module.exports = router;