const router = require("express").Router();
const mirrorRoutes = require("./mirror");
const mainRoutes = require("./main");


// Routes
router.use("/api/main", mainRoutes);
router.use("/api/mirror", mirrorRoutes);



module.exports = router;