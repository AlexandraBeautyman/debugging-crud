const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            allowNull: false,
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        validate: {
            allowNull: false,
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            allowNull: false,
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "silly-owl.jpg"
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }

})

module.exports = Student