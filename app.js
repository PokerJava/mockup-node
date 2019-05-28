require("./models");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const vmtRouter = require("./controllers/vmt");
const shopRouter = require("./controllers/shop");
const serverRouter = require("./controllers/server");
const profileRouter = require("./controllers/profile");
const sessionRouter = require("./controllers/session");
const externalAPIRouter = require("./controllers/externalAPIRouter");
const app = express();
const cors = require("cors");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/vmt", vmtRouter);
app.use("/ExternalAPI", externalAPIRouter);
app.use("/api/shop-cdns/upload", shopRouter);
//AppleTV
app.use("/profile", profileRouter);
app.use("/server", serverRouter);
app.use("/session", sessionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
