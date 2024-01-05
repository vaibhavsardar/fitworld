const mongoose = require("mongoose");

const UserProgramSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "signup",
    required: true,
  },
  // form: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "inteckform",
  //   required: true,
  // },
  StartDate: {
    type: Date,
    default: Date.now,
  },
  Duration: {
    type: Date,
    default: Date.now,
  },

  Content: {
    Workout: {
      VideoContent: {
        type: mongoose.Schema.ObjectId,
        ref: "uservideocontent",
      },
      Workoutfile: {
        fileName: String,
        fileSize: Number,
        filePath: String
      },
    },
    Diet: {
      Dietfile: {
        fileName: String,
        fileSize: Number,
        filePath: String
      },
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },

  // Content: {
  //   Workout: {
  //     VideoContent: {
  //       day: String,
  //       muscle: [
  //         {
  //           mname: String,
  //           video: [
  //             {
  //               title: { type: String },
  //               url: { type: String },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  //   Diet: {},
  //   isDone:{
  //     type:Boolean,
  //     default:false,
  //   }
  // },

  Tracking: {
    Daily: [
      {
        Date: {
          type: Date,
          default: Date.now,
        },
        Weight: String,
        Carb: String,
        Protein: String,
        Fats: String,
      },
    ],
    Weekly: [
      {
        Date: {
          type: Date,
          default: Date.now,
        },
        Neck: String,
        Chest: String,
        Arm: String,
        Waist: String,
        Hips: String,
        Thigh: String,
        Calf: String,
        Weight: String,
      },
    ],
  },
});

module.exports = mongoose.model("userprogram", UserProgramSchema);
