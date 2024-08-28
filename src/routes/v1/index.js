const express = require('express')

const SchoolController = require('../../controllers/school-controllers')

const router = express.Router()

router.post('/addSchool',SchoolController.create)
router.get('/listSchools',SchoolController.getAllSchool)

module.exports = router;