import config from "./config/config.js";
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();

app.use(express.json({ limit: "16kb" }));

app.use(cors({
    origin: config.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser)

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);



export default app 