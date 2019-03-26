const router = require("express").Router();
const inventory = require("../controllers/customersInventory");
const customer = require("../controllers/customersController");



router.route("/")
   .post(customer.getCustomerStatus)
   .get(inventory.inventoryCustomers)

// Matches with "/api/mirrors/:id"
 router
//    .route("/:id")
// //   .get(mirrorsController.findById)
// //   .put(mirrorsController.update)
//    .delete(mirrorsController.removeMirror);

module.exports = router;