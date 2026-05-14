let appointments = [];

const getAppointments = (req, res) => {
  res.json(appointments);
};

const createAppointment = (req, res) => {
  const { patient, doctor, date, time } = req.body;

  if (!patient || !doctor || !date || !time) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const newAppointment = {
    id: Date.now(),
    patient,
    doctor,
    date,
    time
  };

  appointments.push(newAppointment);

  res.status(201).json({
    message: "Appointment created successfully",
    appointment: newAppointment
  });
};

const updateAppointment = (req, res) => {
  const { id } = req.params;
  const { patient, doctor, date, time } = req.body;

  const appointment = appointments.find((app) => app.id == id);

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.patient = patient || appointment.patient;
  appointment.doctor = doctor || appointment.doctor;
  appointment.date = date || appointment.date;
  appointment.time = time || appointment.time;

  res.json({
    message: "Appointment updated successfully",
    appointment
  });
};

const deleteAppointment = (req, res) => {
  const { id } = req.params;

  appointments = appointments.filter((app) => app.id != id);

  res.json({ message: "Appointment deleted successfully" });
};

module.exports = {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment
};
