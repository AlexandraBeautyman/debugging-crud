const Sequelize = require('sequelize')
const db = require('./database')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'wmcampus.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: "Description of campus goes here!"
    }
})

module.exports = Campus
