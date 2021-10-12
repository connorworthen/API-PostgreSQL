const UserModel = require("../models/UserModel")
const { body, validationResult } = require("express-validator")
const { sanitizeBody } = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = [
	body("firstName").isLength({ min: 1 }).trim().withMessage("First name must be specified.").isAlphanumeric().withMessage("First name has non-alphanumeric characters."),
	body("lastName").isLength({ min: 1 }).trim().withMessage("Last name must be specified.").isAlphanumeric().withMessage("Last name has non-alphanumeric characters."),
	body("email").isLength({ min: 1 }).trim().withMessage("Email must be specified.").isEmail().withMessage("Email must be a valid email address.").custom((value) => {

        return UserModel.findOne({email : value}).then((user) => {
				if (user) {
					return Promise.reject("E-mail already in use");
				}
			});
		}),
	body("password").isLength({ min: 6 }).trim().withMessage("Password must be 6 characters or greater."),
	sanitizeBody("firstName").escape(),
	sanitizeBody("lastName").escape(),
	sanitizeBody("email").escape(),
	sanitizeBody("password").escape(),

	(req, res) => {
		try {

		} catch (err) {

		}
	}]