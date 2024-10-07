const { Test } = require('../models')
// 引用異步錯誤處理中間件
const { asyncError } = require('../middlewares')
// 客製化錯誤訊息模組
const CustomError = require('../errors/CustomError')

class TestController {
  getDatas = asyncError(async (req, res, next) => {
    const datas = await Test.findAll()
    res.status(200).json({ message: 'Datas fetched successfully', datas })
  })

  getData = asyncError(async (req, res, next) => {
    const { testId } = req.params
    const data = await Test.findByPk(testId)
    if (!data) throw new CustomError(400, `Failed to fetch id ${testId} data`)
    res.status(200).json({ message: 'Data fetched successfully', data })
  })

  postData = asyncError(async (req, res, next) => {
    const { dataOne, dataTwo, dataThree } = req.body
    const newData = await Test.create({ dataOne, dataTwo, dataThree })
    res.status(200).json({ message: 'Data created successfully', newData })
  })

  putData = asyncError(async (req, res, next) => {
    const { testId } = req.params
    const { dataOne, dataTwo, dataThree } = req.body
    const updatedData = await Test.update({ dataOne, dataTwo, dataThree }, { where: { id: testId } })
    res.status(200).json({ message: 'Data updated successfully', updatedData })
  })

  deleteData = asyncError(async (req, res, next) => {
    const { testId } = req.params
    const deletedData = await Test.destroy({ where: { id: testId } })
    res.status(200).json({ message: 'Data deleted successfully', deletedData })
  })
}

module.exports = new TestController()
