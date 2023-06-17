import app from "./app"
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve(__dirname, '../.env')})
const APPHOST = process.env.APPHOST || ''
const PORT = process.env.PORT || 3000



app.listen(+PORT, APPHOST,()=>{
    console.log("server is connected and running.... Hoooooray")
    
})