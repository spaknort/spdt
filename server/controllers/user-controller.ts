import { Request, Response, NextFunction } from "express"
import { userService } from "../services/user-service"

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, surname, number_phone, email, password, text, speciality, avatar } = req.body
            const userData = await userService.registration(name, surname, number_phone, email, password, text, speciality, avatar)

            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            })

            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {

        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {

        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            res.redirect(process.env.CLIENT_URL as string)
        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {

        }
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.send(['213', '123'])
        } catch (e) {

        }
    }
}

export const userController = new UserController()