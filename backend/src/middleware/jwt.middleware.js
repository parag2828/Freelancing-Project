import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { ApiError } from "../utils/ApiError.util.js"

export const verifyToken = (req, res, next) => {
    console.log("Cookies received:", req.cookies); 
    console.log("Auth Header:", req.headers.authorization);

    const token = req.cookies.accessToken;
    if (!token) return next(new ApiError(401, "You are not authenticated!"))

        jwt.verify(token, config.JWT_SECRET, async (err, payload) => {
            if (err) return next(new ApiError(403, "Token is not valid!"))
                req.userId = payload.id;
                req.isSeller = payload.isSeller;
                next()
        })
    }

