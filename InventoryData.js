const mongoose = require("mongoose");

const ParcelDataSchema = new mongoose.Schema(
  {
    date: String,
    inputId: String,
    name: String,
    UserEmail: String,
    accountNameBranchManning: String,
    period: String,
    month: String,
    week: String,
    skuDescription: String,
    skuCode: String,
    status: String,
    beginning: Number,
    delivery: Number,
    ending: Number,
    offtake: Number,
    inventoryDayslevel: Number,
    noOfDaysOOS: Number,
    remarksOOS: String,
  },
  {
    collection: "NewInventory",
  }
);

mongoose.model("NewInventory", ParcelDataSchema);
