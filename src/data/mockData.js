const users = [
  {
    id: 1,
    name: "Ana López",
    email: "ana@example.com",
    password: "123456",
    role: "patient"
  },
  {
    id: 2,
    name: "Dr. Carlos Ruiz",
    email: "carlos@example.com",
    password: "admin123",
    role: "doctor"
  }
];

const doctors = [
  {
    id: 1,
    name: "Dr. Carlos Ruiz",
    specialty: "Cardiology",
    available: true
  },
  {
    id: 2,
    name: "Dra. Laura Méndez",
    specialty: "Dermatology",
    available: true
  }
];

const appointments = [
  {
    id: 1,
    patientName: "Ana López",
    doctorId: 1,
    date: "2026-04-20",
    time: "10:00"
  }
];

module.exports = {
  users,
  doctors,
  appointments
};