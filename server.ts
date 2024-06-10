import dotenv from "dotenv"
import express from "express"
import db from "./db"
import cors from "cors"
import router from "./routes"

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(router)


const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, async () => {
    await db.$connect()
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})