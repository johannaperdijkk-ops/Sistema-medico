const {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment
} = require("../services/appointmentService");

function getAppointments(req, res) {
  const appointments = getAllAppointments();

  return res.status(200).json({
    message: "Appointments retrieved successfully",
    data: appointments
  });
}

function addAppointment(req, res) {
  const { patientName, doctorId, date, time } = req.body;

  if (!patientName || !doctorId || !date || !time) {
    return res.status(400).json({
      message: "Missing required fields"
    });
  }

  const newAppointment = createAppointment(patientName, doctorId, date, time);

  return res.status(201).json({
    message: "Appointment created successfully",
    data: newAppointment
  });
}

function editAppointment(req, res) {
  const { id } = req.params;
  const updatedAppointment = updateAppointment(id, req.body);

  if (!updatedAppointment) {
    return res.status(404).json({
      message: "Appointment not found"
    });
  }

  return res.status(200).json({
    message: "Appointment updated successfully",
    data: updatedAppointment
  });
}

function removeAppointment(req, res) {
  const { id } = req.params;
  const deletedAppointment = deleteAppointment(id);

  if (!deletedAppointment) {
    return res.status(404).json({
      message: "Appointment not found"
    });
  }

  return res.status(200).json({
    message: "Appointment deleted successfully",
    data: deletedAppointment
  });
}

module.exports = {
  getAppointments,
  addAppointment,
  editAppointment,
  removeAppointment
};