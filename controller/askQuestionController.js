const dbconnection = require("../db/dbConfig");

async function askquestion(req, res) {
  try {
    const { title, description } = req.body;

    const userid = req.users.userid;
    if (!title || !description) {
      return res
        .status(401)
        .json({ msg: "please inter all requierd information" });
    }
    await dbconnection.query(
      "INSERT INTO questions (questionid,userid,title,description,tag) VALUES (?,?,?,?,?) ",
      [generateQuestionId(), userid, title, description, "tag"]
    );
    return res.status(200).json({ msg: "Your qustion is added" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
}
function generateQuestionId() {
  const timestamp = Date.now();
  const randomPart = Math.random() * 1000; // Short random string
  console.log(`${timestamp}-${randomPart}`);
  return `${timestamp}-${randomPart}`; // Example: "1665954621546-543f15"
}
async function allqustions(req, res) {
  try {
    const query = `
      SELECT u.username, q.title,q.questionid AS question 
      FROM users u 
      INNER JOIN questions q ON u.userid = q.userid ORDER BY id DESC
    `;
    const [results] = await dbconnection.query(query);

    return res.json({ questions: results });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
//q.date;
//ORDER BY q.date DESC;
module.exports = { askquestion, allqustions };
