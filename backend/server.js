const express=require("express")
const {mongoose } = require("mongoose")
const cors=require("cors")
const app = express()
const dotenv=require("dotenv")
const router=require("./routes/router")


const connectDB = async() => {
    try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log("mongodb connected")
    } catch (err) {
        console.log("err connecting to mongodb",err)
    }
}

app.use(cors())
dotenv.config()
connectDB()
app.use(express.json())
app.use("/api",router)



app.listen(4000,()=>{
    console.log("server is running")
})