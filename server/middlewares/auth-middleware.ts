import { NextFunction, Request, Response } from "express";
import { tokenService } from "../services/token-service";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) { return next(new Error('Пользователь не авторизован')) }
        
        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) { return next(new Error('Пользователь не авторизован')) }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) { return next(new Error('Пользователь не авторизован')) }

        // @ts-ignore
        req.user = userData
        next()
    }
    catch (e: any) {
        throw new Error('Пользователь не авторизован ' + e.message)
    }
}