const User = require('../model/login');

async function register(req, res) {
  try {
    const { name, email, password, phonenumber } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new User({ name, email, password, phonenumber });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { register, login };
