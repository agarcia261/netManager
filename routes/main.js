const router = require("express").Router();
const ssh = require("../controllers/ssh");

router.route("/")
   .get(ssh.adminDisplay)
//   .post(mirrorsController.addMirror);

// Matches with "/api/mirrors/:id"
 router
//    .route("/:id")
// //   .get(mirrorsController.findById)
// //   .put(mirrorsController.update)
//    .delete(mirrorsController.removeMirror);

module.exports = router;