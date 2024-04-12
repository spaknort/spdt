import jwt from 'jsonwebtoken'
import connection from '../db'

class TokenService {
    generateTokens(payload: any) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, { expiresIn: '15m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '15d' })

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId: number, refreshToken: string) {
        const tokenData = await connection.query(`SELECT * FROM tokens WHERE user_id='${userId}'`)

        console.log(tokenData)

        if (tokenData) { connection.query(`UPDATE tokens SET refresh_token='${refreshToken}' WHERE user_id='${userId}'`) }
        connection.query(`INSERT INTO tokens (user_id, refresh_token) VALUES ('${userId}', '${refreshToken}')`)
    }
}

export const tokenService = new TokenService()