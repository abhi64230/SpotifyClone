 const express = require("express");
 const mongoose = require("mongoose");
 const JwtStrategy = require('passport-jwt').Strategy;
 const ExtractJwt = require('passport-jwt').ExtractJwt;
 const passport = require('passport');
 const User = require('./models/User');
 const authRoutes = require("./routes/auth");
 const songRoutes = require("./routes/song");
 const playlistRoutes = require("./routes/playlist");
 require("dotenv").config();
 const cors = require("cors");
 const app = express();
 const port = 8000;
 app.use(cors());
 app.use(express.json());

mongoose.connect("mongodb+srv://Abhishek_2001:" +
                process.env.MONGO_PASSWORD +
    "@cluster0.ss5qu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then((x) =>{
console.log ("connected to Mongo!");
})
.catch((err) =>{
    console.log("Error while connecting to Mongo");
});

// setup passport-jwt

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts,async (jwt_payload,done)=>{
        try{
            const user=await User.findOne({id:jwt_payload.sub})
            if(user) return done(null,user);
            else return done(null,false);
        }catch(err){
            return done(err,false);
        }
    })
)

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Now we want to tell express that our sever will run on localhost : 8000
app.listen(port,()=>{
    console.log("App is running on port  " + port);  
});

