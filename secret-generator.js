// 引用加密模組
const crypto = require('crypto')

// 密鑰
function secret() {
  try {
    const secret = crypto.randomBytes(32).toString('hex')
    return secret
  } catch (err) {
    throw new CustomError(500, '密鑰生成失敗')
  }
}

// 生成環境變數所需密鑰
console.log(secret())
