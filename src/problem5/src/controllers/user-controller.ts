import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { UserInfo } from '../models/user-info';
import { Like } from 'typeorm';

const userRepository = AppDataSource.getRepository(UserInfo);

/**
 * Create a new user.
 * 
 * Return the created user
 */
export const createUser = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const user = new UserInfo();
  user.name = name;
  user.description = description;

  await userRepository.save(user);

  res.status(201).json(user);
};

/**
 * Get the users by name and description.
 * 
 * Return a list of users or empty array if no one found.
 */
export const getUsers = async (req: Request, res: Response) => {
  const { name, description } = req.query;

  const users = (name || description)
    ? await userRepository.find({
      where: { 
        name: name ? `${name}` : undefined,
        description: description ? Like(`%${description}%`) : undefined }
    })
    : await userRepository.find();

  res.status(200).json(users);
};

/**
 * Get a user by its Id.
 * 
 * A not found exception with http code 404 will be thrown if no user found.
 */
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await userRepository.findOneBy({ id: Number(id) });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.status(200).json(user);
};

/**
 * Update a user and return updated one
 * 
 * A not found exception with http code 404 will be thrown if no user found.
 * 
 * @returns The updated user
 */
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const user = await userRepository.findOneBy({ id: Number(id) });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  user.name = name;
  user.description = description;

  await userRepository.save(user);

  res.status(200).json(user);
};

/**
 * Delete a user with user Id
 * 
 * A not found exception with http code 404 will be thrown if no user found.
 */
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await userRepository.delete({ id: Number(id) });

  if (result.affected === 0) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.status(200).json({ message: 'User deleted successfully' });
};
