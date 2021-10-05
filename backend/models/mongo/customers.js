const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        customerID: String,
        customerTitleName: String,
        customerFirstName: String,
        customerLastName: String,
        customerAddress: String,
        customerTel: String,
        customerEmail: String,
        customerUserName: String,
        customerPassword: String
    },
    {
        timestamps: true,
        collection: "customers"
    }
);

module.exports = mongoose.model("customers", schema);