import User from '../model/Users.js';
import bcrypt from 'bcryptjs'


const signUpController = async (req, res) => {
    try {
        const { name, mobileNo, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({
            $or: [{ email: email }, { mobileNo: mobileNo }],
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists! Login instead' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            mobileNo,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

export { signUpController };