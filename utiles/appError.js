

// function Apperror(statuscode, statusmessage,req,res,next ){
//  return res.status(statuscode).json({
//     status:"fail",
//     message: statusmessage,
//   })
   
// }

// module.exports= Apperror


function Apperror(statuscode, statusmessage) {
  return (req, res, next) => {
    res.status(statuscode).json({
      status: "fail",
      message: statusmessage,
    });
  };
}

module.exports = Apperror;


















