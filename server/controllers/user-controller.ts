import { Request, Response, NextFunction } from "express"
import { userService } from "../services/user-service"
import { compareSync } from "bcrypt"
import { tokenService } from "../services/token-service"

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
            const { email, password } = req.body
            const userData = await userService.login(email, password)

            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            })

            return res.json(userData)
        } catch (e) {
            console.log(e)
            res.statusCode = 500
            // @ts-ignore
            return res.json(e?.message)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies

            res.clearCookie('refreshToken')
            await userService.logout(refreshToken)
            return res.sendStatus(200)
        } catch (e) {
            console.log(e)
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
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)

            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            })

            return res.json(userData)
           
        } catch (e) {
            console.log(e)
        }
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.getAllUsers()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.cookies
            const result = await tokenService.checkUserByRefreshToken(Number(req.params.id), refreshToken)

            if (result) res.json(await userService.getUserById(Number(req.params.id)))
            else throw new Error('Пользователь и отпрвленный токен не совпадают')
        } catch (e: any) {
            res.json(e.message)
        }
    }

    async editEducation(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editEducation(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }

    async editOrganization(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editOrganization(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }

    async editWorkHistory(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editWorkHistory(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }

    async editSpeciality(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editSpeciality(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }

    async editLanguages(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editLanguages(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }

    async editDateOfBirth(req: Request, res: Response, next: NextFunction) {
        try {
            const value = req.params.value
            const userId = req.body.userId

            await userService.editDateOfBirth(userId, value)
            res.sendStatus(200)

        } catch (e) {
            // @ts-ignore
            res.json(e.message)
        }
    }
}

export const userController = new UserController()