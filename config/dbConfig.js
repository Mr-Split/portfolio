/*const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", () => {
    console.log("Error connecting to database");
});

connection.on("connected", () => {
    console.log("MongoDB connection successful");
});

module.exports = connection;*/

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        });
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};

connectDB(); // Call the function to establish connection

module.exports = mongoose.connection;


