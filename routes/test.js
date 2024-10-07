const { Router } = require('express')
const router = Router()

const { testController } = require('../controllers')

const { checkId } = require('../middlewares')

// 驗證參數 testId
router.param('testId', checkId)

router.route('/:testId')
  .get(testController.getData)
  .put(testController.putData)
  .delete(testController.deleteData)

router.route('/')
  .get(testController.getDatas)
  .post(testController.postData)

module.exports = router
