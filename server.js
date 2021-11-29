const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};
// http://localhost:8080
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the club, buddy. " });
});

require("./app/routes/toDo.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to database! ");
  })
  .catch((err) => {
    console.log("Can not connect to the database!", err);
    process.exit();
  });
