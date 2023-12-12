const express = require("express")
const { connectDB } = require("./db/dbConnection");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/v1")
const config = require("./config/config")
const app = express()
const path=require("path")
var http = require("http")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** enable cors */
// app.use(cors());
// app.options("*", cors());

app.use("/v1", routes);

app.use(express.static(path.join(__dirname,`./public`)))

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});
connectDB()
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server raning ............ port = "+ config.port);
});




