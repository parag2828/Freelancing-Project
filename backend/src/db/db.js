import mongoose from "mongoose"
import config from "../config/config.js"

const connectDB = async () => {
    try {
       
        const connectionInstance = await mongoose.connect(`${config.MONGODB_URI}`)
        
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    } catch(error){
        console.log("MONGODB connection error ", error);
        process.exit(1)
    }
}

export default connectDB;