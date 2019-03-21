const router = require("express").Router();
const customer = require("../controllers/customersController");

router.route("/")
   .get(customer.getCustomerStatus)
  // .post(customer.findCustomer);

// Matches with "/api/mirrors/:id"
 router
//    .route("/:id")
// //   .get(mirrorsController.findById)
// //   .put(mirrorsController.update)
//    .delete(mirrorsController.removeMirror);

module.exports = router;