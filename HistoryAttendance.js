const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userEmail: String,
  date: Date,
  timeIn: Date,
  timeOut: Date,
  timeInlocation: String,
  timeoutlocation: String,
}, {
  collection: "NewAttendance",
});

mongoose.model("NewAttendance", AttendanceSchema);

