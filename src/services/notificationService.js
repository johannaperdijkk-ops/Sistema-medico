function sendAppointmentNotification(patientName, doctorId, date, time) {
  return {
    message: `Notification sent to ${patientName} for appointment with doctor ${doctorId} on ${date} at ${time}`
  };
}

module.exports = {
  sendAppointmentNotification
};