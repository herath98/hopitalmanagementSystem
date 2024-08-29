import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      console.log('Signup request received with:', { username, email });
  
      if (!username || !email || !password) {
        return next(errorHandler(400, 'Please fill in all fields'));
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
  
      await newUser.save();
      console.log('User saved successfully:', newUser);
  
      res.status(201).json({ message: 'Signup successful!' });
    } catch (error) {
      console.error('Signup error:', error);
      next(error);
    }
  };
  
