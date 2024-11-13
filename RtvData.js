const mongoose = require("mongoose");

const RTVDetailSchema = new mongoose.Schema(
  {
    inputId: String,
    userEmail: String,
    date: String,
    merchandiserName: String,
    outlet: String,
    category: String,
    contactNum: String,
    item: String,
    amount: String,
    quantity: String,
    total: String,
    remarks: String,
    reason: String,
    expiryDate: String
  },
  {
    collection: "NewReturnToVendor",
  }
);

mongoose.model("NewReturnToVendor", RTVDetailSchema);
