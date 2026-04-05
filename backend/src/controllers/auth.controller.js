import User from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.util.js"
import { ApiResponse } from "../utils/ApiResponse.util.js"
import { asyncHandler } from "../utils/asyncHandler.util.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = asyncHandler(async(req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password)
    bcrypt.hash(this.password, 10)
})