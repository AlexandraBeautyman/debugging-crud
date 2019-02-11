const router = require('express').Router()
const { Campus } = require('../db')

router.get('/', async (req, res, next) => {
    try{
        const campuses = await Campus.findAll()
        if (campuses) {
            res.json(campuses)
        }
        const error = new Error("Something went wrong GETing the campuses.")
    }
    catch (error){
        next(error)
    }
})

module.exports = router