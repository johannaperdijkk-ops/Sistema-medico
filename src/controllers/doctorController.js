const doctors = [
  {
    id: 1,
    name: "Dr. Carlos Ramirez",
    specialty: "Cardiology"
  },
  {
    id: 2,
    name: "Dr. Ana Lopez",
    specialty: "Pediatrics"
  },
  {
    id: 3,
    name: "Dr. Sofia Martinez",
    specialty: "Dermatology"
  },
  {
    id: 4,
    name: "Dr. Miguel Torres",
    specialty: "Neurology"
  }
];

const getDoctors = (req, res) => {
  res.json(doctors);
};

module.exports = {
  getDoctors
};
