const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userEmail: String,
  date: Date,
  timeLogs: [
    {
      timeIn: Date,
      timeOut: Date,
      timeInLocation: String,
      timeOutLocation: String,
      accountNameBranchManning: {
        type: String,
        unique: true,
        sparse: true, // Ensures uniqueness without enforcing it if empty
      }
    }
  ]
}, {
  collection: "NewAttendance",
});

const NewAttendance = mongoose.model("NewAttendance", AttendanceSchema);

module.exports = NewAttendance;
