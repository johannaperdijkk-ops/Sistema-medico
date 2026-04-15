class Appointment {
  constructor(id, patientName, doctorId, date, time) {
    this.id = id;
    this.patientName = patientName;
    this.doctorId = doctorId;
    this.date = date;
    this.time = time;
  }
}

module.exports = Appointment;