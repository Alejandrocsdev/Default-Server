// 引用客製化錯誤訊息模組
const CustomError = require('../errors/CustomError')

// 全域錯誤訊息中間件
function globalError(err, req, res, next) {
  // console.info(err)
  console.info(err.message)

  res.status(err.code || 500).json({ message: err.message })
}

module.exports = globalError
