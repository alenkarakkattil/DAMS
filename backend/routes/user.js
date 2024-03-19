import { getSingleUser,getAllUsers,updateUser,deleteUser } from '../controllers/userController.js';
import express from 'express'
import { authenticate } from '../auth/verifyToken.js';

const userRouter = express.Router()

userRouter.get('/:id',authenticate, getSingleUser);
userRouter.get('/', getAllUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;