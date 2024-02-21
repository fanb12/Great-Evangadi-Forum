const e = require("express");

const dbConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function register(req, res) {
	const { username, firstname, lastname, email, password } = req.body;
	if (!email || !password || !firstname || !lastname || !username) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "Please provide all required information accurately" });
	}

	try {
		const [user] = await dbConnection.query(
			"SELECT username, userid FROM users WHERE username=? OR email=?",
			[username, email]
		);

		if (user.length > 0) {
			return res.status(400).json({ msg: "Already registered" });
		}

		if (password.length < 8) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "Password must be at least eight characters long" });
		}
		//encryption of password
		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);

		await dbConnection.query(
			"INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)",
			[username, firstname, lastname, email, hashedPassword]
		);

		return res.status(StatusCodes.CREATED).send("User registered successfully");
	} catch (error) {
		console.log(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "An error occurred while registering the user" });
	}
}

async function login(req, res) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "Please enter all required fields" });
	}

	try {
		const [user] = await dbConnection.query(
			"SELECT username, userid, password FROM users WHERE email=?",
			[email]
		);

		if (user.length === 0) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "Invalid credentials" });
		}

		const isMatched = await bcrypt.compare(password, user[0].password);
		if (!isMatched) {
			return res
				.status(StatusCodes.BAD_REQUEST)
				.json({ msg: "Invalid credentials" });
		}

		const username = user[0].username;
		const userid = user[0].userid;
		const token = jwt.sign({ username, userid }, "secret", { expiresIn: "1d" });

		return res
			.status(StatusCodes.OK)
			.json({ msg: "User logged in successfully", token });
	} catch (error) {
		console.log(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "An error occurred, try again later" });
	}
}

async function checkUser(req, res) {
	const username = req.user.username;
	const userid = req.user.userid;

	res.status(StatusCodes.OK).json({ msg: "valid user", username, userid });
}

module.exports = { register, login, checkUser };
