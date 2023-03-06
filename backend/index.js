const express= require('express')
const usersRoutes=require('./routes/users')
const postsRoutes=require('./routes/posts')
const likesRoutes=require('./routes/likes')
const authRoutes=require('./routes/auth')
const commentsRoutes=require("./routes/comments")
const cors=require('cors')
const cookieParser=require('cookie-parser')

const app=express()

//middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(cookieParser())


app.use('/api/users',usersRoutes)
app.use('/api/comments',commentsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/likes',likesRoutes)
app.use('/api/posts',postsRoutes)

app.get('/', (req,res)=>{
    res.send('hello world')
})
const server =app.listen(8800,()=>{
    console.log("successfully")
})