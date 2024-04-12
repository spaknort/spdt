import connection from "../db"
import { hash } from 'bcrypt'
import * as uuid from 'uuid'
import { mailService } from "./mail-service"
import { tokenService } from "./token-service"
import UserDto from "../dto/user-dto"

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
            `INSERT INTO users (name, surname, password, email, number_phone, text, speciality, avatar, activation_link)
                VALUES ('${name}', '${surname}', '${hashPassword}', '${email}', '${number_phone}', '${text}', '${speciality}', '${avatar}', '${activationLink}')
        `)
        const findedUser = await connection.query(`SELECT * FROM users WHERE number_phone='${number_phone}'`)
        
        // @ts-ignore
        const userDto = new UserDto({ email, id: findedUser[0][0]?.id, isActivated: findedUser[0][0]?.isActivated })
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
        const user = await connection.query(`SELECT * FROM users WHERE activation_link='${fullActivationLink}'`)
        // @ts-ignore
        if (user[0][0] == undefined) { throw new Error('Неккоректная ссылка для активации акаунта') }
        connection.query(`UPDATE users SET isActivated=1 WHERE activation_link='${fullActivationLink}' `)
    }
}

export const userService = new UserService()