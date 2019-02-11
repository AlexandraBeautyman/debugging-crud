const router = require('express').Router()
const { Student } = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll()
        if (students) {
            res.json(students)
        }
        const error = new Error("Something went wrong GETing the students.")
        throw error
    }
    catch (error){
        next(error)
    }
})

module.exports = router
