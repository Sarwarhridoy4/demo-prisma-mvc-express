import { PrismaClient, type User } from "@prisma/client";

const prisma = new PrismaClient();

// Create user
const createUser = async (payload: Partial<User>) => {
  const user = await prisma.user.create({
    data: {
      name: payload.name!,
      email: payload.email!,
      password: payload.password!, // hash before if needed
    },
  });
  return user;
};

// Get all users
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Get user by ID
const getUserById = async (id: string) => {
  // Convert string to number
  const userId = Number(id);

  if (isNaN(userId)) {
    throw new Error("Invalid user ID");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user;
};

// Update user by ID
const updateUserById = async (id: string, data: Partial<User>) => {
  const userId = Number(id);
  if (isNaN(userId)) {
    throw new Error("Invalid user ID");
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data,
  });

  return updatedUser;
};

// Delete user by ID
const deleteUserById = async (id: string) => {
  const userId = Number(id);
  if (isNaN(userId)) {
    throw new Error("Invalid user ID");
  }

  const deletedUser = await prisma.user.delete({
    where: { id: userId },
  });

  return deletedUser;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
