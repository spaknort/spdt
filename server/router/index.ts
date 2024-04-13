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
// @ts-ignore
router.get('/user/:id', authMiddleware, userController.getUser)
router.put('/user/edit/education/:value', authMiddleware, userController.editEducation)
router.put('/user/edit/organization/:value', authMiddleware, userController.editOrganization)
router.put('/user/edit/work_history/:value', authMiddleware, userController.editWorkHistory)
router.put('/user/edit/speciality/:value', authMiddleware, userController.editSpeciality)
router.put('/user/edit/languages/:value', authMiddleware, userController.editLanguages)
router.put('/user/edit/date_of_birth/:value', authMiddleware, userController.editDateOfBirth)

export default router