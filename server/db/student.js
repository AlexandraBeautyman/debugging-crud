const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmpty: false
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
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