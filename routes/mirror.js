const router = require("express").Router();
const mirrorsController = require("../controllers/mirrorsController");

// Matches with "/api/mirrors"
router.route("/")
  .get(mirrorsController.getMirrors)
  .post(mirrorsController.addMirror);

// Matches with "/api/mirrors/:id"
 router
   .route("/:id")
//   .get(mirrorsController.findById)
//   .put(mirrorsController.update)
   .delete(mirrorsController.removeMirror);

module.exports = router;
