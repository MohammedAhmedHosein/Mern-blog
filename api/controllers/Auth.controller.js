import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
export const Signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const hashedPasswird = bcryptjs.hashSync(password, 10);
  console.log(req.body.username, req.body.email, hashedPasswird);
  const newUser = new User({
    username,
    email,
    password: hashedPasswird,
  });
  //   const newUser = new User({
  //     username: User,
  //     email, HERE THE SAME BECAUSE THE VARIABLES HAVE THE SAME NAME IN MODEL
  //     password: Password, if the password VARIABLE IS NOT THE SAME AS THE USER VARIABLE WE WILL DO THAT
  //   });

  try {
    await newUser.save();
    res.status(201).json({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
