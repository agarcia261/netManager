const router = require("express").Router();
const mirrorRoutes = require("./mirror");
const mainRoutes = require("./main");
const sshAPI = require("./ssh");


// Routes
router.use("/api/main", mainRoutes);
router.use("/api/mirror", mirrorRoutes);
router.use("/api/ssh", sshAPI);



module.exports = router;