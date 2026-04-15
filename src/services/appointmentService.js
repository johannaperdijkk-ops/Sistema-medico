const { appointments } = require("../data/mockData");
const { sendAppointmentNotification } = require("./notificationService");

function getAllAppointments() {
  return appointments;
}

function createAppointment(patientName, doctorId, date, time) {
  const newAppointment = {
    id: appointments.length + 1,
    patientName,
    doctorId,
    date,
    time
  };

  appointments.push(newAppointment);
  sendAppointmentNotification(patientName, doctorId, date, time);

  return newAppointment;
}

function updateAppointment(id, updatedData) {
  const appointment = appointments.find(item => item.id === Number(id));

  if (!appointment) {
    return null;
  }

  Object.assign(appointment, updatedData);
  return appointment;
}

function deleteAppointment(id) {
  const index = appointments.findIndex(item => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  return appointments.splice(index, 1)[0];
}

module.exports = {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment
};