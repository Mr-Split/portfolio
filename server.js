/*const express = require("express");

const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");


const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());


app.use("/api/portfolio", portfolioRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
*/

const express = require("express");
const cors = require("cors"); // Import cors package
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

/*const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend URL
    optionsSuccessStatus: 200,
  };*/

// CORS middleware setup
app.use(cors());

// API routes
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});