const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    if (campuses) {
      res.json(campuses);
    }
    const error = new Error("Something went wrong GETing the campuses.");
    throw error;
  } catch (error) {
    next(error);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const singleCampus = await Campus.findOne({
      where: {
        id: id
      },
      include: [{ model: Student }]
    });
    if (singleCampus) {
      res.json(singleCampus);
    }
    const error = new Error("Something went wrong GETing a single campus");
    throw error;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
