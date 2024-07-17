require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

app.use(express.json());
//connectDB
const connectDB  = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

//routes
app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/jobs' , authenticateUser, jobsRouter)


//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");



//routes
app.get("/", (req, res) => {
  res.send("Jobs Api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on prot ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
