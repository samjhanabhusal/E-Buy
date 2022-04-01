
// const http = require('http')
const express = require('express')

const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')


dotenv.config({
    path: './.env'
})

// writing configuration....secret keys
mongoose

.connect(process.env.MONGO_URI)
// if this promise is successful
.then(()=>console.log("DB connection is successful"))
// to catch error
.catch((err)=>{
    console.log(err)
});


//TO take json object
// Built in level middleware
app.use(express.json());//can pass json object

// Application-level middleware
// / creating routes----creating rest api 
// Some endpints
app.use("/api/auth",authRoute)
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);


// const server = http.createServer(app);
app.listen(process.env.PORT || 5000, ()=>

{
    console.log("Backend server is running")
})

