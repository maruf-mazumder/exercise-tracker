const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// var http = require("http");
// var httpProxy = require("http-proxy");
// var proxy = httpProxy.createProxyServer({});

// http
//   .createServer(function (req, res) {
//     proxy.web(req, res, { target: "http://www.google.com" });
//     console.log("got connected");
//   })
//   .listen(3000);

mongoose
  .connect("mongodb://localhost/exercise-tracker", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to mongodb...");
  });

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
