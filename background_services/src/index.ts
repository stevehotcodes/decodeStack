import cron from "node-cron"
import { sendNewUserWelcomeEmail } from "./EmailServices/welcomeEmail";
import nodemailer from 'nodemailer'


let configOptions={
    pool:true,
    host:"smtp.gmail.com",
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}

let transport= nodemailer.createTransport(configOptions)

cron.schedule('* * * * * *', async()=>{
    console.log("Sending welcome email.........")
     await sendNewUserWelcomeEmail(await transport)
   
})