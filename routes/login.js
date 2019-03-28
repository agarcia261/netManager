
const router = require("express").Router();
const customer = require("../controllers/cusomersController");

router.route("/")
   .get(customer.getCustomerStatus)
   .post(customer.findCustomer);


 router


module.exports = router;