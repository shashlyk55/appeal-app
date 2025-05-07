const router = require('express').Router()

router.get('/:id')
router.get('/')
router.post('/')
router.put('/finish')
router.put('/cancel')
router.put('/cancel-all')

module.exports = router