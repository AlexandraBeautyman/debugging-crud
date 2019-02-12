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

router.get("/:campusId", async (req, res, next) => {
  try {
    const id = req.params.campusId;
    const singleCampus = await Campus.findOne({
      where: {
        id: id
      },
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

router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body)
  res.json(newCampus)
}
  catch (err){
    next(err)
  }
})

router.delete("/:campusId", async (req, res, next) => {
  try{
    const id = req.params.campusId
    const deleted = await (Campus.destroy({
      where: {
        id: id
      }
    }))
    if (!deleted) res.json({text: "Sorry, there's no campus with that ID in the system"})
    res.json({text: "Campus has been deleted"})
  }
  catch(err){
    next(err)
  }
})

module.exports = router;
