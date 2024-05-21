import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


const connectDB = async () => {
      try {
           const connectionInstance =  await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
            console.log(`\n MongoDB connected !! hoDB_HOST : ${connectionInstance.connection.st}`);
      }
      catch(error){
            console.log("MONGODB connection error" , error)
            process.exit(1)
      }
}

export default connectDB