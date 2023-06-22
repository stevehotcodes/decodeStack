
import nodemailer from 'nodemailer'

let configOptions={
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"teststeve83@gmail.com",
        pass:"tkllkingflfnuvbs"
    }
}
//message options

let messageOption ={
    from: "teststeve83@gmail.com",
    to: "teststeve83@gmail.com",
    subject: "NEW NODEMAILER",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
}

//function send the mal
async function sendMail(messageOpts:any){
    let  transporter =nodemailer.createTransport(configOptions)
   await transporter.sendMail(messageOpts)
}

sendMail(messageOption)