const mysql = require("mysql2/promise");
const express = require("express");

async function main() {
	// connected to mysql database
	const connection = await mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "evangadi",
		password: "abcdE1825",
		database: "evangadi_db",
	});

	// created express server
	const app = express();

	// allow express to understand json
	app.use(express.json());

	// define API
	app.post("/api/user/register", async (req, res) => {
		await connection.execute(`
        INSERT INTO 
        users(
            username, 
            firstname, 
            lastname, 
            email, 
            password
            )
        VALUES(
            "${req.body.username}", 
            "${req.body.firstname}", 
            "${req.body.lastname}", 
            "${req.body.email}", 
            "${req.body.password}"
            ) 
         `);

		res.json({
			message: "user created",
		});
	});

	app.post("/api/user/login", async (req, res) => {
		// query database for user only by username
		const [result] = await connection.query(`
            SELECT * FROM users WHERE username="${req.body.username}"
        `);

		// if no data is found
		if (result.length == 0) {
			// user doesn't exist
			res.json({ message: "wrong username or password" });
			// stop execution
			return;
		}

		// if user is found, check passwords match
		if (result[0].password != req.body.password) {
			// password doesn't match
			res.json({ message: "wrong username or password" });
			// stop execution
			return;
		}

		// if they match, user is correct and allowed access.
		res.json({ message: "success" });
	});

	/// server listening on port 5000
	app.listen(5000, () => console.log("server running on port 5000"));
}

main();
