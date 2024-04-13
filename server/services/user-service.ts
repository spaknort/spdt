import connection from "../db"
import { hash } from 'bcrypt'
import * as uuid from 'uuid'
import { mailService } from "./mail-service"
import { tokenService } from "./token-service"
import UserDto from "../dto/user-dto"
import bcrypt from 'bcrypt'

class UserService {
    async registration(
        name: string,
        surname: string,
        number_phone: string,
        email: string,
        password: string,
        text: string,
        speciality: string,
        avatar: string
    ) {
        const canditate = await connection.query(`SELECT * FROM users WHERE number_phone='${number_phone}'`)
         // @ts-ignore
        if (canditate[0]?.length != 0) { throw Error(`Пользователь с номером телефона ${number_phone} уже найден`) }
        
        const activationLink = `${process.env.API_URL}/api/activate/${uuid.v4()}`
        const hashPassword = await hash(password, 3)
        await connection.query(
            `INSERT INTO users (name, surname, avatar, text, speciality, email, number_phone, password, activation_link)
                VALUES ('${name}', '${surname}', '${avatar}', '${text}', '${speciality}', '${email}', '${number_phone}', '${hashPassword}', '${activationLink}')
        `)
        const [result, fields] = await connection.query(`SELECT * FROM users WHERE number_phone='${number_phone}'`)
        // @ts-ignore
        const findedUser = result[0]
        const userDto = new UserDto({ email, id: findedUser?.id, isActivated: findedUser?.isActivated })
        const tokens  = tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        await mailService.sendActivationMail(email, activationLink)

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink: string) {
        const fullActivationLink = `${process.env.API_URL}/api/activate/${activationLink}`
        console.log(fullActivationLink)
        const [result, fields] = await connection.query(`SELECT * FROM users WHERE activation_link='${fullActivationLink}'`)
        // @ts-ignore
        const user = result[0]
        if (user == undefined) { throw new Error('Неккоректная ссылка для активации акаунта') }
        connection.query(`UPDATE users SET is_activated=1 WHERE activation_link='${fullActivationLink}' `)
    }

    async login(email: string, password: string) {
        const [result, fields] = await connection.query(`SELECT * FROM users WHERE email='${email}'`)
        // @ts-ignore
        const user = result[0]
        if (!user) { throw new Error('Пользователь с таким email не найден') }

        const isPasswordsEquls = await bcrypt.compare(password, user.password)
        if (!isPasswordsEquls) { throw new Error('Неверный пароль') }

        const userDTO = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDTO })

        await tokenService.saveToken(userDTO.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDTO
        }
    }

    async logout(refreshToken: string) {
        await tokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) { throw new Error('Пользователь не авторизован') }

        const userData: any = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        
        if(!userData || !tokenFromDb) { throw new Error('Пользователь не авторизован') }
        else {
            const user = await connection.query(`SELECT * FROM users WHERE id=${userData.id}`)
            const userDTO = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDTO })

            await tokenService.saveToken(userDTO.id, tokens.refreshToken)
            return {
                ...tokens,
                user: userDTO
            }
        }
    }

    async getAllUsers() {
        const [result, fields] = await connection.query(`SELECT * FROM users`)
        // @ts-ignore
        return result[0]
    }

    async getUserById(id: number) {
        const [result, fields] = await connection.query(`SELECT avatar, date_of_birth, education, email, favorite_products, favorite_users, id, is_activated, languages, name, number_phone, organization, speciality, surname, text, work_history FROM users WHERE id='${id}'`)
        // @ts-ignore
        return result[0]
    }

    async editEducation(id: number, value: string) {
        await connection.query(`UPDATE users SET education='${value}' WHERE id='${id}'`)
    }

    async editOrganization(id: number, value: string) {
        await connection.query(`UPDATE users SET organization='${value}' WHERE id='${id}'`)
    }

    async editWorkHistory(id: number, value: string) {
        await connection.query(`UPDATE users SET work_history='${value}' WHERE id='${id}'`)
    }

    async editSpeciality(id: number, value: string) {
        await connection.query(`UPDATE users SET speciality='${value}' WHERE id='${id}'`)
    }

    async editLanguages(id: number, value: string) {
        await connection.query(`UPDATE users SET languages='${value}' WHERE id='${id}'`)
    }

    async editDateOfBirth(id: number, value: string) {
        await connection.query(`UPDATE users SET date_of_birth='${value}' WHERE id='${id}'`)
    }
}

export const userService = new UserService()