const router = require("express").Router();
const customer = require("../controllers/cusomersController");

router.route("/")
   .get(customer.getCustomerStatus)
//   .post(mirrorsController.addMirror);

// Matches with "/api/mirrors/:id"
 router
//    .route("/:id")
// //   .get(mirrorsController.findById)
// //   .put(mirrorsController.update)
//    .delete(mirrorsController.removeMirror);

module.exports = router;