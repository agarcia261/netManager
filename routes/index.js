const router = require("express").Router();
const mirrorRoutes = require("./mirror");

// Book routes
router.use("/api/mirror", mirrorRoutes);

module.exports = router;