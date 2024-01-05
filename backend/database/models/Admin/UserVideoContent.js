const mongoose = require("mongoose");

const VideoContentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "signup",
    required: true,
  },
  dayofweek: [
    {type: String,
    },
  ],
  muscle: [
    { parentday:String,
      mname: { type: String,},
      video: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
  ]
  // content: [
  //   {day: String,
  //   muscle: [
  //     {
  //       mname: { type: String, unique: true },
  //       video: [
  //         {
  //           title: { type: String },
  //           url: { type: String },
  //         },
  //       ],
  //     },
  //   ]},
  // ],
});

module.exports = mongoose.model("uservideocontent", VideoContentSchema);
