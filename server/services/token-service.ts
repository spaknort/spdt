import jwt, { JwtPayload } from 'jsonwebtoken'
import connection from '../db'
import { AnyTxtRecord } from 'dns'

class TokenService {
    generateTokens(payload: any) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '15d' })

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: string): JwtPayload | string | null  {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string)
            return userData
        }
        catch (e: any) {
            console.log(e.message, ' - validateAccessTokenError')
            return null
        }
    }

    validateRefreshToken(token: string): JwtPayload | string | null {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string)
            return userData
        }
        catch (e) {
            return null
        }
    }

    async saveToken(userId: number, refreshToken: string) {
        const tokenData = await connection.query(`SELECT * FROM tokens WHERE user_id='${userId}'`)

        if (tokenData) { connection.query(`UPDATE tokens SET refresh_token='${refreshToken}' WHERE user_id='${userId}'`) }
        else connection.query(`INSERT INTO tokens (user_id, refresh_token) VALUES ('${userId}', '${refreshToken}')`)
    }

    async removeToken(refreshToken: string) {
        await connection.query(`DELETE FROM tokens WHERE refresh_token='${refreshToken}'`)
    }

    async findToken(token: string) {
        const [result, fields] = await connection.query(`SELECT * FROM tokens WHERE refresh_token='${token}'`)
        // @ts-ignore
        return result[0]
    }
}

export const tokenService = new TokenService()