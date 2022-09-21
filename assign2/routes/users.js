const express = require("express")
const {getUsers, createUser, updateUser, deleteUser} = require("../controller/users")


const router = express.Router();

router.get("/users",getUsers)
router.post("/users",createUser)
router.put("/users/:firstName",updateUser)
router.delete("/users/:firstName",deleteUser)


module.exports  = router
