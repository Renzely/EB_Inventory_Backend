const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userEmail: String,
  date: Date,
  accountNameBranchManning: String,
  timeLogs: [
    {
      timeIn: Date,
      timeOut: Date,
      timeInLocation: String,
      timeOutLocation: String,
    }
  ]
}, {
  collection: "NewAttendance",
});

const NewAttendance = mongoose.model("NewAttendance", AttendanceSchema);

module.exports = NewAttendance;
