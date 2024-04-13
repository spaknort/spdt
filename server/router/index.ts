import { Router } from "express"
import { userController } from '../controllers/user-controller'
import { authMiddleware } from "../middlewares/auth-middleware"

const router = Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
// @ts-ignore
router.get('/users', authMiddleware, userController.getUsers)

export default router