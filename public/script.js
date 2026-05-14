console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loadDoctorsBtn").addEventListener("click", loadDoctors);
  document.getElementById("createAppointmentBtn").addEventListener("click", createAppointment);
  document.getElementById("refreshAppointmentsBtn").addEventListener("click", loadAppointments);

  loadDoctors();
  loadAppointments();
});

async function loadDoctors() {
  const response = await fetch("/api/doctors");
  const doctors = await response.json();

  const list = document.getElementById("doctorList");
  list.innerHTML = "";

  doctors.forEach((doctor) => {
    const li = document.createElement("li");
    li.textContent = `${doctor.name} - ${doctor.specialty}`;
    list.appendChild(li);
  });
}

async function loadAppointments() {
  const response = await fetch("/api/appointments");
  const appointments = await response.json();

  const list = document.getElementById("appointmentList");
  list.innerHTML = "";

  if (appointments.length === 0) {
    list.innerHTML = "<li>No appointments registered yet.</li>";
    return;
  }

  appointments.forEach((appointment) => {
    const li = document.createElement("li");
    li.textContent = `${appointment.patient} - ${appointment.doctor} - ${appointment.date} - ${appointment.time}`;
    list.appendChild(li);
  });
}

async function createAppointment() {
  const patient = document.getElementById("patient").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!patient || !doctor || !date || !time) {
    document.getElementById("message").textContent = "Please complete all fields.";
    return;
  }

  await fetch("/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ patient, doctor, date, time })
  });

  document.getElementById("message").textContent = "Appointment created successfully.";

  document.getElementById("patient").value = "";
  document.getElementById("doctor").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";

  loadAppointments();
}
