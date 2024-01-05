const SignUp = require("../models/User/UserSchema");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const UserProgram = require("../models/User/UserProgram");
const InteckForm = require("../models/User/InteckForm");
var db = mongoose.connection;
exports.registerUser = async (request, response) => {
  const { username, email, password } = request.body;
  const signup = new SignUp({ username, email, password });

  if (!username || !email || !password) {
    return response.status(422).json({ error: "plz fill all the fields" });
  }

  try {
    const userexist = await SignUp.findOne({ email: email });

    if (userexist) {
      return response.status(422).json({ error: "user already exist" });
    }

    const result = await signup.save();

    const newuser = await SignUp.findOne({ email: email });
      console.log(newuser);
    const token = await newuser.generateAuthToken();
    console.log("mytok=", token);
      await response.cookie('jwtoken', token, {
      httpOnly: true, expires: new Date(Date.now() + 900000) });

    await response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.loginUser = async (request, response) => {
  // let token;

  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ error: "plz fill all the fields" });
    }

     const userlogin = await SignUp.findOne({ email: email });
    //  response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // const token = jwt.sign({ _id:userlogin._id }, "ADHFGJLGLFDGJDHFYGD");
    //   console.log("mytok=", token);
    const token = await userlogin.generateAuthToken();

      await response.cookie('jwtoken', token, {
      httpOnly: true, expires: new Date(Date.now() + 900000) });
    

    if (!userlogin) {
      return response.status(400).json({ error: "user error" });
    } else {

      

      console.log(userlogin);
      response.send(userlogin);
    }
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.ShowUser = async (request, response) => {
    //   var db = mongoose.connection;

    //   const coll = db.collection("signups");


    // await coll.find({})
    // .toArray()
    // .then((ans) => {
    //     // console.log(ans);
    //     // response.send(ans);
    //   });

  response.send(request.rootUser);
};

exports.getUser = catchAsyncErrors(async (req, res, next) => {
  const user = await SignUp.findById(req.rootUser._id);

  res.status(200).json({
    success: true,
    user,
  });
});

exports.admingetUser = async (req, res) => {
  console.log("test",req.body)
  const user = await SignUp.findById(req.body.userId);

  res.status(200).json({
    success: true,
    user,
  });
};

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("jwtoken", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.enroll = async (req, res) => {
  const enroll = new UserProgram({user:req.rootUser._id});
  // const user = await SignUp.findById(req.body.userId);
  const result = await enroll.save();
  console.log("test",enroll);
  res.status(200).json({
    success: true,
    result,
  });
};


exports.getEnrollUser = async (req, res) => {
  
  const user = await UserProgram.findById(req.body.userId);

  res.status(200).json({
    success: true,
    user,
  });
};

exports.getUserForm = async (req, res) => {
  
  const form = await InteckForm.findById({user:req.body.user});

  res.status(200).json({
    success: true,
    form,
  });
};

exports.getUserProgram = async (req, res) => {
  
  const program = await UserProgram.findOne({user:req.rootUser._id});
  console.log("res",program)
  res.status(200).json(program);

};


exports.getallEroll = async (req, res) => {

  const coll = db.collection("userprograms");

  await coll.find({})
  .toArray()
  .then((ans) => {
      // console.log(ans);
      res.send(ans);
    });

};

exports.addUserinteckform = async (request, response) => {
  const {  user, fname, lname, age,gender, goal} = request.body;
  const inteckform = new InteckForm({user:request.rootUser._id,fname, lname, age,gender, goal});

  try {
    const result = await inteckform.save();
    console.log("im ",result);
    // response.send(result);
    
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.getAllinteckforms =  async (req, res) => {

  const coll = db.collection("inteckforms");

  await coll.find({})
  .toArray()
  .then((ans) => {
      // console.log(ans);
      res.send(ans);
    });

};

exports.getUserDetails = async (req, res, next) => {
  const user = await SignUp.findById(req.params.id);
  res.status(200).json({
    success: true,
    user,
  });

};

exports.adddailytraking = async (req, res, next) => {
  const {weight,carbohydrates,protein,fats} = req.body;
  const data = await UserProgram.updateOne({user:req.rootUser._id},{$push :{"Tracking.Daily":[{"Weight":weight,"Protein":protein,"Carb":carbohydrates,"Fats":fats}]}});
  console.log(data)
  res.status(200).json({
    success: true,
  });

};
exports.addweeklytraking = async (req, res, next) => {
  const {neck,chest,arm,waist,hips,thigh,calf,weight} = req.body;
  const user = await UserProgram.updateOne({user:req.rootUser._id},{$push :{"Tracking.Weekly":[{"Neck":neck,"Chest":chest,"Arm":arm,"Waist":waist,"Hips":hips,"Thigh":thigh,"Calf":calf,"Weight":weight}]}});
  res.status(200).json({
    success: true,
  });

};

exports.getprogramcontent = async(req, res) => {
  const {user} =req.body;
  const program = await UserProgram.findOne({"user":user});
  // console.log("res",program)
  res.status(200).json(program);

};


