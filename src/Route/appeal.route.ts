const router = require('express').Router()

router.get('/')
router.post('/')
router.put('/process')
router.put('/finish')
router.put('/cancel')
router.put('/process/cancel-all')

module.exports = router