const router = require("express").Router();
const eventRoutes = require("./events");
//const userRoutes = require("./users");
const {login, register} = require("../../controllers/usersController");

// Routes
router.use("/events", eventRoutes);

router.route("/users/login")
    .post(login)
router.route("/users/register")
    .post(register)

module.exports = router;
