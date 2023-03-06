const {db}=require('../connect')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

const login=(req,res)=>{
    const {email}=req.body
    const q="SELECT * FROM users WHERE email=?"
    db.query(q,[email],(err,data)=>{
        if(err) return res.status(500).json(err)
        //check the user if exists
        if(data.length===0) return res.status(404).json('user not found')
        //check the password if match
        const checkedPassword=bcrypt.compareSync(req.body.password, data[0].password)
        if(!checkedPassword) return res.status(400).json('wrong!')

        const token=jwt.sign({id:data[0].id},'secretkey')

        //others: all the thing from data except from the password
        const {password, ...others}=data[0]
        res.cookie('accessToken',token,{
            httpOnly:true
        }).status(200).json(others)
    })
}

const signup=(req,res)=>{
    const {name,password,email}=req.body
    
    const q="SELECT * FROM users WHERE name=?"
    db.query(q,[name],(err,data)=>{
        if(err) return res.status(500).json(err)
        //check the user if exists
        if(data.length) return res.status(500).json('user already exists')
        //if not, create new user
        //hash the password
        const salt=bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt);

        const q="INSERT INTO users (`name`, `email`, `password`) VALUE (?)"
        db.query(q,[[name,email,hashedPassword]],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json('user has been created.')
        })
    })
}

const logout=(req,res)=>{
    res.clearCookie('accessToken',{
        secure:true,
        sameSite:'none'
    }).status(200).json('user has been logged out')
}

exports.login=login
exports.signup=signup
exports.logout=logout