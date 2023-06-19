const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/VRSRegistration").then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log(' NO Connection');
})