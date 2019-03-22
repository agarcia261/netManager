const router = require("express").Router();
const customer = require("../controllers/customersInventory");

router.route("/")
   //.get(customer.getCustomerStatus)
   .get(customer.inventoryCustomers)

  // .post(customer.findCustomer);

// Matches with "/api/mirrors/:id"
 router
//    .route("/:id")
// //   .get(mirrorsController.findById)
// //   .put(mirrorsController.update)
//    .delete(mirrorsController.removeMirror);

module.exports = router;