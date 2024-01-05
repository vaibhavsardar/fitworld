const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || "5000";
const cookieParser = require('cookie-parser');
const connectDB = require("./database/connectiondb");
const userRoute = require("../backend/database/routes/userRoute.js");
const multer  = require('multer')
const app = express();
const fs = require('fs');
connectDB();

var db = mongoose.connection;

const User = require("./database/models/userModel");
const SignUp = require("./database/models/User/UserSchema");
const Video = require("./database/models/Admin/AdminVideoModel");
const VidContent = require("./database/models/Admin/UserVideoContent");
const InteckForm = require("./database/models/User/InteckForm");


const authenticate = require("./database/middleware/authenticate");
const Authenticate = require("./database/middleware/authenticate");
const UserProgram = require("./database/models/User/UserProgram");
const catchAsyncErrors = require("./database/middleware/catchAsyncErrors");
const FileSchema = require("./database/models/User/FileSchema");
const ContactusModel = require("./database/models/User/ContactusModel");
const ProductModel = require("./database/models/ProductModel");

app.use(cors({credentials: true,
  origin: ["http://localhost:3000", "http://localhost:3000"],
  
 }));

// app.use(cors());
app.use(cookieParser());
// app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
const upload = multer({ dest: 'uploads/' });
// app.post("/register", async (request, response) => {
//   const { username, email, password } = request.body;
//   const signup = new SignUp({username, email, password});

//   try {
//     const result = await signup.save();
//     console.log("im ",result);
//     response.send(result);
    
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });



app.use("/",userRoute);




app.post("/contactus", async (request, response) => {
  const { name, email, msg } = request.body;
  const contactus = new ContactusModel({ name, email, msg });


  try {
    
    contactus.save();

    const res = await response.send(result);

  } catch (error) {
    response.status(500).send(error);
  }
});




// var fs = require('fs');


// var pdfBinary = fs.readFileSync("test.pdf"); 
// // print it out so you can check that the file is loaded correctly
// console.log("Loading file");
// console.log(pdfBinary);



//   db.collection('invoices').insert({"pdf":pdfBinary}, function(err, doc){
//     // check the inserted document
//     console.log("Inserting file");
//     console.log(doc);

//     db.collection('invoices').findOne({}, function(err, doc){
//       if (err) console.error(err);
//       fs.writeFile('testout.pdf', doc.pdf.buffer, function(err){
//           if (err) throw err;
//           console.log('Sucessfully saved!');
//       });
//     });
//   });


// app.post("/testpdf",catchAsyncErrors( async (request, response) => {
//   // const { handbookurl } = request.body.;

   
//   // await UserProgram.updateOne({"user":"645cd8faa846b99802d5a6ae"},{"Content.Workout.handbookUrl":request.body.mypdf});
//   console.log("mypdreslt=",request.file);

  
// }));

app.post("/workoutpdf", upload.single('file'), async (req, res) => {
  const file = req.file;
  const {user} =req.query;
  console.log("mypdreslt=",user);
  const { originalname, size, path } = file;

  // Save file metadata in MongoDB
  // const newFile = new FileSchema({
  //   fileName: originalname,
  //   fileSize: size,
  //   filePath: path
  // });

  

  try {
    await UserProgram.updateOne({"user":user},{"Content.Workout.Workoutfile":{
      fileName: originalname,
      fileSize: size,
      filePath: path
    }});
    res.json({ message: 'File uploaded successfully!', file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'File upload failed.' });
  }
  // Process and save the file as per your requirements
  res.json({ message: 'File uploaded successfully!', file });
});

app.post("/dietpdf", upload.single('file'), async (req, res) => {
  const file = req.file;
  const {user} =req.query;
  console.log("dietreslt=",file);
  const { originalname, size, path } = file;

  // Save file metadata in MongoDB
  // const newFile = new FileSchema({
  //   fileName: originalname,
  //   fileSize: size,
  //   filePath: path
  // });

  try {
    await UserProgram.updateOne({"user":user},{"Content.Diet.Dietfile":{
      fileName: originalname,
      fileSize: size,
      filePath: path
    }});
    // res.json({ message: 'File uploaded successfully!', file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'File upload failed.' });
  }
  // Process and save the file as per your requirements
  res.json({ message: 'File uploaded successfully!', file });
});


app.get('/getworkoutpdf', async (req, res) => {

  try {
    const file = await UserProgram.findOne({user:"645cd8faa846b99802d5a6ae"});
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filedata = file.Content.Workout.Workoutfile;
    console.log(filedata.filePath);
    


    // const filePath = file.filePath;
    // console.log("fpath ",filePath);
    const fileStream = fs.createReadStream(filedata.filePath);
    res.setHeader('Content-Type', 'application/pdf');
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error retrieving file' });
  }
});

app.get('/getdietpdf', async (req, res) => {

  try {
    const file = await FileSchema.findById("6465358612678228ad8f1b70");
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = file.filePath;
    console.log("fpath ",filePath);
    const fileStream = fs.createReadStream(filePath);
    // res.setHeader('Content-Type', 'application/pdf');
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving file' });
  }
});


app.put("/update", async (request, response) => {
  const { duration } = request.body;

  const result = await InteckForm.findOneAndUpdate({_id:"645cacc86b33e3ff599b2faf"},{duration});

  console.log(result);

  
});





// app.post("/inteckform",Authenticate, async (request, response) => {
//   const {  user, fname, lname, age,gender, goal} = request.body;
//   const inteckform = new InteckForm({user:request.rootUser._id,fname, lname, age,gender, goal});

//   try {
//     const result = await inteckform.save();
//     console.log("im ",result);
//     // response.send(result);
    
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


app.post("/addvideo", async (request, response) => {
  const { mname, title, url } = request.body;
  try {
    
    const da = await Video.findOne({ mname });

    if (da) {
      console.log("im ture", da);
      await Video.updateOne({mname},{$push :{video:{ title,url}}},function (err,succ){ console.log("err:",err)});

    } else {
      const video = new Video({ mname, video: [{ title, url }] });
      const reslult = await video.save();
      response.send("done");
    }

    // response.json(request.body);
  } catch (error) {
    return response.status(500).send(error);
  }
});


app.post("/addmuscle", async (request, response) => {
  const {user, mname, day, video } = request.body;
  try {
    
    const u = await VidContent.findOne({"user":user});
    const d = await VidContent.findOne({"user":user,dayofweek:day});
    // const d = await VidContent.findOne({ day });
    //const da2 = await VidContent.findOne({ muscle:[mname] });
    console.log("ch u repet =", u);
    console.log("ch d repet =", d);

   if(d){
      // await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{muscle:[{ mname,video}] }});
      await VidContent.updateOne({"user":user},{$push :{muscle:[{"parentday":day, mname,video}]}});

    }else if(u){
      // await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{muscle:[{ mname,video}] }});
      await VidContent.updateOne({"user":user},{$push :{dayofweek:[day],muscle:[{"parentday":day, mname,video}]}});
      
    }else {
      // console.log("im ture", da);
      const vidcontent = new VidContent({"user":user,dayofweek:[day], muscle:[{"parentday":day, mname,video}] });
      const reslult = await vidcontent.save();
    }



    // if(d){
    //   // await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{muscle:[{ mname,video}] }});
    //   await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae"},{$push :{"content.$.muscle":[{ mname,video}]}});

    // }else if(u){
    //   // await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{muscle:[{ mname,video}] }});
    //   await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae"},{$push :{content:[{day, muscle:[{ mname,video}] }]}});

    // }else {
    //   // console.log("im ture", da);
    //   const vidcontent = new VidContent({"user":"645cd8faa846b99802d5a6ae",content:{day, muscle:[{ mname,video}] }});
    //   const reslult = await vidcontent.save();
    // }
///
    // if (da) {
    //   console.log("im ture", da);
    //   await VidContent.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{muscle:[{ mname,video}] }});

    // } else {
    //   const vidcontent = new VidContent({"user":"645cd8faa846b99802d5a6ae",content:{day, muscle:[{ mname,video}] }});
    //   const reslult = await vidcontent.save();
    //   response.send("done");
    // }

    // response.json(request.body);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// app.post("/addmuscle", async (request, response) => {
//   const { mname, day, video } = request.body;
//   try {
    
//     const da = await VidContent.findOne({ day, });
//     //const da2 = await VidContent.findOne({ muscle:[mname] });
//     console.log("ch mus repet=", da);

//     if (da) {
//       console.log("im ture", da);
//       await VidContent.updateOne({day},{$push :{muscle:[{ mname,video}] }});

//     } else {
//       const vidcontent = new VidContent({day, muscle:[{ mname,video}] });
//       const reslult = await vidcontent.save();
//       response.send("done");
//     }

//     // response.json(request.body);
//   } catch (error) {
//     return response.status(500).send(error);
//   }
// });

// app.post("/addmuscle", async (request, response) => {
//   const { mname, day, video } = request.body;
//   try {
    
//     // const da = await VidContent.findOne({ day, });
//     // const da2 = await VidContent.findOne({ day,"muscle.mname" : mname});
//       //  const da2 = await VidContent.findOne({ day,"Content.Workout.VideoContent" : mname});

//     // console.log("ch mus repet=", da2);
    
//     const da = await UserProgram.findOne({"Content.Workout.VideoContent.day":day});
//     // console.log("ch mus repet=", da2);
//     if (da) {
//       // console.log("im ture", da);
//     const da = await UserProgram.updateOne({"user":"645cd8faa846b99802d5a6ae",day},{$push :{"Content.Workout.VideoContent":{muscle:[{ mname,video}] } }});
//     // console.log("ch mus repet=", da);
//     } else {
//       const reslult = await UserProgram.updateOne({"user":"645cd8faa846b99802d5a6ae"},{$set :{"Content.Workout.VideoContent":{"day":day, "muscle":[{ mname,video}] } }});

//       response.send("done");
//     }

//     // response.json(request.body);
//   } catch (error) {
//     return response.status(500).send(error);
//   }
// });

app.get("/getdata", (req, res) => {
  // console.log("geting data...");
  const coll = db.collection("users");

  coll
    .find({})
    .toArray()
    .then((ans) => {
      console.log(ans);
      res.send(ans);
    });
});

app.get("/getContent", async (req, res) => {
  // console.log("geting data...");
  const coll = db.collection("videos");

  await coll.find({})
  .toArray()
  .then((ans) => {
      // console.log(ans);
      res.send(ans);
    });

  // const data = await Video.find({}).exec();
  // res.send(data);
});


app.get("/getvideodata", async (req, res) => {
  const coll = db.collection("uservideocontents");

  await coll.find({})
  .toArray()
  .then((ans) => {
      // console.log(ans);
      res.send(ans);
    });

  // const data = await Video.find({}).exec();
  // res.send(data);
});


app.post("/postproduct", async (req, res) => {
 const {pname,pid,pprice,pdescription}= req.body;

 const productmodel = new ProductModel({pname,pid,pprice,pdescription});

 console.log(pname)
        
 try {
    
  const result =await productmodel.save();

  // const res = await response.send(result);

} catch (error) {
  response.status(500).send(error);
}
});

app.get("/getallproduct", async (req, res) => {
  const coll = db.collection("myproducts");


  await coll.find({})
  .toArray()
  .then((ans) => {
     
      console.log(ans);
      res.send(ans);
      
    });

  
});

app.get("/getproductbyid", async (req, res) => {
  const coll = db.collection("myproducts");


  await coll.findOne({"pid":req.body.pid})
  .then((ans) => {
     
      console.log(ans);
      res.send(ans);
      
    });

  
});

app.put("/putproductbyid", async (req, res) => {
  const coll = db.collection("myproducts");
  const {pname,pid,pprice,pdescription}= req.body;

  await coll.findOneAndUpdate({"pid":req.body.pid},{pname,pid,pprice,pdescription})
  .then((ans) => {
     
      console.log(ans);
      res.send(ans);
      
    });

  
});

app.delete("/deleproductbyid", async (req, res) => {
 
  const coll = db.collection("myproducts");

  


  await coll.findOne({"pid":req.body.pid})
  .then((ans) => {
     
      console.log(ans);
      res.send(ans);
      
    });
  
});


app.listen(PORT, () => {
  console.log(`i am listening on port ${PORT}`);
});


