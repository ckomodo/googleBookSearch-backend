const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const db = require("./models");

const PORT = process.env.PORT || 5000;

// const cors = require("cors");
// const User = require("./Models/userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cors());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

//GET Book  route
app.get("/books", (req, res) => {
    db.Book.find()
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

//POST book route
app.post("/books", (req, res)=>{
    db.Book.create(req.body).then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.json(err);
      });
})

//DELETE route
app.delete("/api/books/:id", (req, res) => {
    db.Book.deleteOne(
      
      {_id: req.params.id}

    )
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontEnd/build"));
}


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
