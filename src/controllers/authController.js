const { users } = require("../data/mockData");

function login(req, res) {
  const { email, password } = req.body;

  const user = users.find(
    item => item.email === email && item.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  return res.status(200).json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
}

module.exports = {
  login
};