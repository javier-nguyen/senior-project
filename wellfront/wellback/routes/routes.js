const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async(request, response) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy ({
        fullName:request.body.fullName.trim(),
        username:request.body.username.trim(),
        email:request.body.email.trim(),
        password:securePassword
        
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.post('/signin', async(req,res)=> {
    let {username, password} = req.body;
    username = username.trim();
    password = password.trim()
    if(username == "" || password == ""){
        res.json({
         status:"FAILED",
         message:"Empty Credentials supplied"
        });
    
    }else{
        //Check if user exists
        user.find({username})
        .then(data =>{
            if(data.length){
            //user exists
    const hashedPassword = data[0].password;
    bcrypt.compare(password,hashedPassword).then(result=>{
        if(result){
            //password matches
        // res.json({
        //  status:"SUCCESS",
        //  message:"Signin succesful",
        //  data : data
        // });
        res.render('signinsuccess',{name : data[0].name});
    }else{
        res.json({
            status: "FAILED",
            message: "Invalid password entered"
        });
    }
        })
    .catch(err=>{
        res.json({
        status: "FAILED",
        message:"An error occured while comparing passwords"
    
        })
    
    })
    
            }else{
                res.json({
                    status:"FAILED",
                    message:"Invalid Credentials entered"
                })
            }
            
        })
        .catch(err=>{
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user"
            })
        })
    }
    
})

router.get('/signin')
module.exports = router 