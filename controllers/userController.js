import { connectModel } from "../db.js";

async function getAllUsers(req, res) {
  try {
    const users = await connectModel.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const newUser = await connectModel.create(req.body);
    res.status(201).json({
      message: "User created",
      newUser: newUser,
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const findUser = await connectModel.findById(id);
    await connectModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "User deleted",
      deletedUser: findUser,
    });
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateUser = await connectModel.findByIdAndUpdate(id, {
      name: name,
      email: email,
      password: password,
    });
    res.status(200).json({
      message: "User updated",
      updateUser: updateUser,
    });
  } catch (error) {
    console.log(error);
  }
}

export { getAllUsers, createUser, deleteUser, updateUser };
