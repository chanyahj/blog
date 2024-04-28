import express from 'express'
import * as userController from '../controller/userController.js'

const router = express.Router();

//Get all users
router.get('/', userController.getAllUsers)
//Get user by ID
router.get('/:id', userController.getUserByID)
//Creating a new user
router.post('/', userController.createUser)
//login
router.post('/login', userController.login)
export default router;