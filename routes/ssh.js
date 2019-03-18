const router = require("express").Router();
const sshController = require("../controllers/ssh");

// Matches with "/api/mirrors"
router.route("/")
  .get(sshController.show)
  .post(sshController.show);

  module.exports = router;