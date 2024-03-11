const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')

router.post('/sendmail',async(req,res)=>{
    try{
       
       const {name,email,message} = req.body;

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"crisece123@gmail.com",
                pass:"iupg kkop gjew uqxj"
            }
        })
    
        const main = async() => {
            await transporter.sendMail({
                from :"crisece123@gmail.com",
                to:"crisece123@gmail.com",
                subject :"Project message",
                html:`<h5>${name}<h5> <h6>${email}</h6> <p> ${message} </p>`
            })
        }
    
        main().catch(err => console.log(err.message));
        res.send("Successfully!")
    }catch(err){
        console.log(err.message)
        res.send("error")
    }
   
})

module.exports = router