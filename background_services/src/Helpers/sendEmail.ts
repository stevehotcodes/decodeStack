
import nodemailer, { createTransport } from "nodemailer"
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../../.env')})

let configOptions={
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}

function createTransporter(configOpts:any){
    return nodemailer.createTransport(configOpts)
}
//send emal funct
export async function sendMailProcess(messageOptions:any) {
    //create the transporter
    let transporter=createTransporter(configOptions)

    await transporter.sendMail(messageOptions,(err,response)=>{
        console.log(response);
        
        
    })
    
}