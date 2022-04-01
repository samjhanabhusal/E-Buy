const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register",async(req, res) => {
  const newUser = new User({//User model
    username: req.body.username,
    email: req.body.email,

    // password:req.body.password,
    // For Security
    password: CryptoJS.AES.encrypt(
      req.body.password, 
      process.env.PASS_SEC
    ).toString(),


  });
// Send aboove username..to db..use save() method
// save()--Promise --Async Function
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);//sending to client side
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
            // if there is no user the sending error message
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

          //decrypt return - hashcode
        //Converting hashcode into string 
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        // if incorrect password ..sending error
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");
           
        // Varify user after login provide jsonwebtoken 
        // Creating Json web token
        const accessToken = jwt.sign(
        {
          // prop 
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}//after 3 days --not gonna able to use this access token again--In that case ...should login again
        );
  
      // Spread Operator
        const { password, ...others } = user._doc;//we can have everything but not password in db  
        // res.status(200).json(others);
        // if username name and password are okay then successful
        res.status(200).json({...others, accessToken});

         

    }catch(err){
      // sending error
        res.status(500).json(err);
    }

});

module.exports = router;