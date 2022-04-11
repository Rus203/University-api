const { StatusCodes, ReasonPhrases } = require('http-status-codes')

module.exports = function (error, request, response, next) {
  if (error.isOperational) {
    response.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      statusCode: error.statusCode
    })
  } else {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'Error',
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: StatusCodes.INTERNAL_SERVER_ERROR
    })
  }
}
