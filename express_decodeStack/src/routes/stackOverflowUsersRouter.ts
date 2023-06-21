import { Router } from "express";
import { addUser, deleteUser, getAllUsers, getOneUser, getSignedInUser, signIn, updateUser } from "../controllers/stackOverflowUsersController";
import { accessRequired, adminPrivileges } from "../Middlewares/authorization";

const userRoutes =Router()

userRoutes.post('/signup',addUser)
userRoutes.get('/all',accessRequired,getAllUsers)
userRoutes.delete('/delete/:id',adminPrivileges, deleteUser)
userRoutes.patch('/update',accessRequired,updateUser)
userRoutes.get('/one/:id',accessRequired,getOneUser)
userRoutes.post('/signin',signIn)
userRoutes.get('/signin-user',accessRequired,getSignedInUser)


export default userRoutes