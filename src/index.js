const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const data = require("./routes/data");
const cors = require("cors");

const pkg = require("../package.json");

var corsOptions = {
  origin: process.env.FRONTEND_HOSTNAME,
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// --- --- --- --- --- --- --- --- ---

const app = express();
const port = process.env.PORT;

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(cookieParser());

app.get("/data-api", (req, res) => {
  res.send("OK");
});

app.get("/data-api/version", (req, res) => {
  res.send(pkg.version);
});

// app.use('/tanks', authenticateToken, tanks)
app.use("/data-api", data);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send();
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
