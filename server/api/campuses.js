const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    if (campuses) {
      res.json(campuses);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const singleCampus = await Campus.findOne({
      where: { id: id },
      include: [{ model: Student }]
    });
    if (!singleCampus) {
      const error = new Error("Something went wrong GETing a single campus");
      error.status = 404;
      throw error;
    }
    res.json(singleCampus);
  } catch (error) {
    next(error);
  }
});

router.put("/:campusId", async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const [numRows, updatedCampusArr] = await Campus.update(req.body, {
      where: { id: id }
    });
    if (!numRows) {
      const error = new Error("Something went wrong updating this campus");
      error.status = 404;
      throw error;
    }
    res.status(201)
  } catch (err) {
    next(err);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const deleted = await Campus.destroy({ where: { id: id } });
    if (!deleted) res.json(false);
    res.json(true);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
