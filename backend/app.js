const express= require('express')
const app=express()
app.get('/', (req,res)=>{
    res.send('hello world')
})
const server =app.listen(5000,()=>{
    console.log("successfully")
})