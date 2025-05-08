import { AppealController } from "../Controller/appeal.controller"
const router = require('express').Router()

const appealController = new AppealController()

router.get('/', appealController.getAll)
router.post('/', appealController.add)
router.put('/:id/process', appealController.processAppeal)
router.put('/:id/finish', appealController.finishAppeal)
router.put('/:id/cancel', appealController.cancelAppeal)
router.put('/process/cancel-all', appealController.cancelAllProcessAppeals)

module.exports = router