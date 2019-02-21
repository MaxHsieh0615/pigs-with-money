const router = require("express").Router();
const bookRoutes = require("./books");
const user = require("./user");

// Book routes
router.use("/books", bookRoutes);
router.use("/user", user);
module.exports = router;
