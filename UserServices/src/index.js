import dotenv from "dotenv"
import connectDB from "./DB/db.connection.js"
import { app } from "./app.js"

dotenv.config({
      path:"../env"
})

connectDB()
.then(() => {
      app.listen(process.env.PORT || 8000, () =>{
            console.log(`Server is Running at port: ${process.env.PORT}`)
      })
})
.catch((err) => {
      console.log("MongoDb connection failed",err)
})

