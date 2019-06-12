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
      where: { id: id },
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
// FAV We could fuck up async await so we're returning a promise.
// We could have a typo in what we send back.
// We could write req.params instead of req.body or something.

router.put("/:studentId", async (req, res, next) => {
  try {
    const [numOfRows, updatedStudent] = await Student.update(req.body, {
      where: { id: req.params.studentId },
      returning: true,
      plain: true
    });
    if (!updatedStudent) {
      console.log(numOfRows);
      const error = new Error("Something went wrong updating this student");
      error.status = 404;
      throw error;
    }
    res.send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const id = req.params.studentId;
    const rows = await Student.destroy({ where: { id: id } });
    if (!rows) res.json(false);
    else res.json(true);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
