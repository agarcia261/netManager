
const router = require("express").Router();
const customer = require("../controllers/cusomersController");

router.route("/")
   .get(customer.getCustomerStatus)
   .post(customer.findCustomer);

// add appropriate functions not sure function above are necessary.
 router


module.exports = router;