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
const aafSubscriptionsRouter = require("./controllers/aaf-subscriptions");
const aafPartnerDevice = require("./controllers/aaf-partnerDevice");
const externalAPIRouter = require("./controllers/externalAPIRouter");
const b2cRouter = require("./controllers/b2c");
const blockChain = require("./controllers/block-chain");
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
app.use("/aaf/v1.4.4/subscriptions", aafSubscriptionsRouter);
app.use("/api/v2/aaf/partnerDevice", aafPartnerDevice);
app.use("/loginByB2B2C", b2cRouter);
app.use("/blockChain/api", blockChain);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  req.useChunkedEncodingByDefault = true;
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
