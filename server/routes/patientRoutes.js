const { register} = require("../Controller/patientsController");
const router = require("express").Router();

router.post("/register", register);