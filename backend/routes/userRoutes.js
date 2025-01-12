const express = require('express')
const router = express.Router()
const user = require('../model/Users')

router.post('/register',async (req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name,!email,!password) return res.status(4000).json({status: false,message:"all files are require"})
           
            const existinguser = await user
        return res.status(201).json({status: true,message:"register successful"})
    }catch(error){

    }

})

module.exports = router;