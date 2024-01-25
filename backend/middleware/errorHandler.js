const {constants} = require("../constants")

const errorHandler = (err,req,res,next) =>{
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch(statusCode) {
    case constants.VALIDATION:
      res.json({
        title:"Validation fail",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.UNAUTHORIZED:
    req.json({
      title:"Unauthorized",
      message: err.message,
      stackTrace: err.stack,
    });
    case constants.FORBIDDEND:
      req.json({
        title:"Forbiddend",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.NOT_FOUND:
      req.json({
        title:"Not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      req.json({
        title:"server error",
        message: err.message,
        stackTrace: err.stack,
      });
      default:
        console.log("NO Error, All Good!");
        break;
  }
};

module.exports = errorHandler;