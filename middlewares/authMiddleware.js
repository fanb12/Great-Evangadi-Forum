
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer")) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "AUTHENTICATION INVALID" });
	}

	const token = authHeader.split(" ")[1]; 


	try {
		const { username, userid } = jwt.verify(token, "secret"); // Verify the extracted token
		req.user = { username, userid };
		next();
	} catch (error) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "AUTHENTICATION INVALID" });
	}
}

module.exports = authMiddleware;
