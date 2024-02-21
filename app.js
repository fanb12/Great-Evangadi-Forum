const express = require("express");
const app = express();
const port = 5500;

const userRoutes = require("./routes/userRoute");
//db connection
const dbConnection = require("./db/dbConfig");
//json middleware to extract json data
app.use(express.json());
// User route middleware
app.use("/api/users", userRoutes);

// questions route middleware'

// answer route middleware
async function start() {
	try {
		const result = await dbConnection.execute("select 'test'");
		await app.listen(port);
		console.log("database connection established");
		console.log(`litsening on ${port}`);
	} catch (error) {
		console.log(error.message);
	}
}
start();
