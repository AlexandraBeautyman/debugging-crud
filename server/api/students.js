const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    if (students) {
      res.json(students);
    }
    const error = new Error("Something went wrong GETing the students.");
    throw error;
  } catch (error) {
    next(error);
  }
});

router.get("/:studentId", async (req, res, next) => {
  try {
    const id = req.params.studentId;
    const singleStudent = await Student.findOne({
      where: {
        id: id
      },
      include: [{ model: Campus }]
    });
    if (singleStudent) {
      res.json(singleStudent);
    }
    const error = new Error("Something went wrong GETing a single student");
    throw error;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
