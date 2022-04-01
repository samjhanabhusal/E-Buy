const express = require ('express')
// Router-Level Middleware
const router = express.Router();


const User = require("../models/User");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Middlewares/verifyToken");


//UPDATE
// parameter--user id....using middleware to verify json web token--(file verify token)
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        // setting new inrormation---what to update?
        $set: req.body,//set info to user
      },
      { new: true }//to return updated user...
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE--parameter--user id
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER--retrive info
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // destructuring other properties
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;//return latest user
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)//gonna return  lates first five users
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET USER STATS
// return total no of user per months

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));//return last year

  try {
    // group items---aggregate..mongodb
    const data = await User.aggregate([
      // match...condition. our---crreatedat ra expiry hunxa....gratest that last year
      { $match: { createdAt: { $gte: lastYear } } },
      {
        // month nummber...create month variable----we set take the monts number inside created add date 
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        // now grouping items , users..._id-----vid 1:20
        $group: {
          _id: "$month",
          // total userno
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});











// router.use(express.json());

// router.get("/usertest", (req, res)=>{
//     res.send("user test is successful ");
// });

// //Post method---post(taking request from user,,from crlient)
// router.post('/userposttest', (req, res)=>{
//     // taking username from client side
//   //passing server
//     const username = req.body.username
//     res.send("Your username is : "+ username);

// })

module.exports = router;