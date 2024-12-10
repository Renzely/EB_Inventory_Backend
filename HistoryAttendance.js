const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
    userEmail: String,
    date: Date,
    accountNameBranchManning: String,
    timeLogs: [
      {
        timeIn: Date,
        timeOut: Date,
        timeInLocation: String,
        timeOutLocation: String,
        time_in_coordinates: {
          latitude: Number,
          longitude: Number,
        },
        time_out_coordinates: {
          latitude: Number,
          longitude: Number,
        },
        selfieUrl: { type: String, default: '' }, // Add selfieUrl field
      },
    ],
  },
  {
    collection: "NewAttendance",
  }
);

const NewAttendance = mongoose.model("NewAttendance", AttendanceSchema);

module.exports = NewAttendance;
