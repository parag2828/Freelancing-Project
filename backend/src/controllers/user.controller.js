import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js"
import { ApiResponse } from "../utils/ApiResponse.util.js"
import User from "../models/user.model.js"

export const deleteUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    if (req.userId !== user._id.toString()) {
        throw new ApiError(403, "You can delete only your account!");
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json(
        new ApiResponse(200, {}, "User deleted successfully.")
    );
});

export const getUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id);
    
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    res.status(200).json(
        new ApiResponse(200, user, "User found!")
    );
});