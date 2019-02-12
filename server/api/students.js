const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    if (students) {
      res.json(students);
    }
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

    if (!singleStudent) {
      const error = new Error("Something went wrong GETing a single student");
      error.status = 404;
      throw error;
    }

    res.json(singleStudent);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    if (!newStudent) {
      const error = new Error("Something went wrong creating a new student");
      error.status = 404;
      throw error;
    }
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
