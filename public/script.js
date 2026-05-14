async function loadDoctors() {
  const response = await fetch("/api/doctors");
  const doctors = await response.json();

  const list = document.getElementById("doctorList");
  list.innerHTML = "";

  doctors.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = `${doc.name} - ${doc.specialty}`;
    list.appendChild(li);
  });
}

async function loadAppointments() {
  const response = await fetch("/api/appointments");
  const appointments = await response.json();

  const list = document.getElementById("appointmentList");
  list.innerHTML = "";

  appointments.forEach(app => {
    const li = document.createElement("li");
    li.textContent = `${app.patient} - ${app.doctor} - ${app.date}`;
    list.appendChild(li);
  });
}

async function createAppointment() {
  const patient = document.getElementById("patient").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;

  const response = await fetch("/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      patient,
      doctor,
      date
    })
  });

  const data = await response.json();

  document.getElementById("message").textContent =
    "Appointment created successfully";
}