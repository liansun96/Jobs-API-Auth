const { StatusCodes } = require("http-status-codes");

const notFound = (req ,res) => res.status(StatusCodes.NOT_FOUND).send('Routes does not exists')

module.exports = notFound