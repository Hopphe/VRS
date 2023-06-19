import express  from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/LoginRegistrationDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    country:String,
    city:String,
    dob:Date,
    email:String,
    password:String
})

const User = new mongoose.model("User", userSchema)



app.post('/login',(req,res) => {
     const {email, password} = req.body
     User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successful", user:user})
            }else{
                res.send({message:"Password Incorrect"})
            }

        }else{
            res.send({message:"User not found!"})
        }
     })
})

app.post('/register',(req,res) => {
    const { fname, lname, country, city, dob, email, password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already register"})
        }
        else{
            const user=new User({
                fname,
                lname,
                country,
                city,
                dob,
                email,
                password
            })
            user.save(err =>{
                if (err){
                    res.send(err)
                }
                else{
                    res.send({message: "User Successfully Registered"})
                }
            })
        }
    })
})
app.listen(9002,() => {
    console.log('Server is running at port 9002')
})
