import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        // for both user and freelancer
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, "Password is true"]
        },
        avatar: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["freelancer", "client"],
            required: true
        },

        // --- Freelancer Fields ---

        bio: {
            type: String,
            maxlength: 500,
        },
        // Freelancers fill this, Clients can leave it empty
        skills: [{
            type: String,
            index: true,
        }],
        hourlyRate: {
            type: Number,
            default: 0,
        },
        // --- Reputation ---
        rating: {
            type: Number,
            default: 0,
        },
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

// --- Secure Password Hashing ---
userSchema.pre("save", async function (next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// --- Auth Methods ---
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)};

    userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const User = mongoose.model("User", userSchema);