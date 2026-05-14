const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./src/routes/authRoutes");
const doctorRoutes = require("./src/routes/doctorRoutes");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later."
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Medical Appointment System API is running securely" });
});

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
