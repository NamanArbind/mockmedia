const express = require("express");
const { db } = require("./db/models");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const { userRoutes } = require("./routes/users");
const { postRoutes } = require("./routes/posts");
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/", express.static(__dirname + "/public"));

db.sync({})
  .then(() => {
    app.listen(5353, () => {
      console.log("the server was started on http://localhost:5353");
    });
  })
  .catch((err) => {
    console.log(err);
    console.error(new Error("Database was not Synced"));
  })
