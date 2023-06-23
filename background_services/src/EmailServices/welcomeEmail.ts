import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../../.env')})
import mssql from 'mssql'
import ejs, { name } from 'ejs'
import { sqlConfig } from '../config'
import { sendMailProcess } from '../Helpers/sendEmail'

export interface IUser{
    id:string
    firstName:string
    lastName:string
    username:string
    email:string
    password:string
    role:string
    isDeleted:number;
    isActive:number;
        
}




export const sendNewUserWelcomeEmail=async (transport:any)=>{
    try {
        const pool= await mssql.connect(sqlConfig) //database connection
        //fetch new registered user
        const users:IUser[]=   await(await ((await pool.request()).query('SELECT * FROM stackOverflowUsers WHERE isActive=0'))).recordset
        
        //sending loop to all the newly registered users
        for(const user of users ){  
            ejs.renderFile('Templates/templates.ejs',{name:user.firstName, message:`Welcome${user}`},async (err,html)=>{
                        
                let messageOption ={
                    from:"teststeve83@gmail.com",
                    to:user.email ,
                    subject: "WELCOME",
                    html
                }
                
                    // await transport.sendMail(messageOption)
                    await sendMailProcess(messageOption)
                    
                    // set is Active  to 1
                    await (await pool.request()).query(`UPDATE stackOverflowUsers SET isActive=1 WHERE id='${user.id}'`)
                })

            }

    } 
    catch (err) {
        return err  
    }
    
}
