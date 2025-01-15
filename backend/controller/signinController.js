import User from "../model/Users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'



// Login Route
const signinController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password!' });
    }
    console.log(process.env.SECRET_KEY);
    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { signinController }