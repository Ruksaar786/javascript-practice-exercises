const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRouters");

//fT9gfJVkdRHrGpOl
//mongodb+srv://admin:fT9gfJVkdHrGpOi@cluster0.u4nns7b.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(
  "mongodb+srv://admin:fT9gfJVKdRHrGpOI@cluster0.u4nns7b.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();

app.use(express.json());

app.use(loggedIn);

app.get("/", loggedIn, (req, res) => {
  res.send("this is root route");
});

function loggedIn(req, res) {
  const user = req.query.user;
  if (user === "ruksaar") {
    console.log("logged in");
    next();
    return;
  } else {
    res.send("not allowed to login");
  }
}

app.get("/users", (req, res) => {
  res.send("this is user route");
});

app.listen(3000, () => {
  console.log("server is running in port 3000 ");
});
