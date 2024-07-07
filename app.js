require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Jobs Api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on prot ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
