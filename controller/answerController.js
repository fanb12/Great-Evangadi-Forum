const dbconnection = require("../db/dbConfig");
async function answer(req, res) {
  try {
    // Extract the answer text from the request body
    const { answerText } = req.body;

    // Extract the question ID from the request parameters
    const { questionId } = req.params;
    console.log(questionId);
    // Extract the user ID from the authenticated user's session or token
    const userId = req.users.userid; // Adjust this according to your authentication setup
    // Insert the answer into the database
    await dbconnection.query(
      "INSERT INTO answers (userid, questionid, answer) VALUES (?, ?, ?)",
      [userId, questionId, answerText]
    );

    // Return success message
    return res.json({ msg: "Answer submitted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function onequstion(req, res) {
  try {
    // Assuming the question ID is passed as a parameter in the request
    const questionId = req.params.questionId; // Adjust this according to your route setup
    // console.log(questionId);
    // Fetch the title and description of the question from the database
    const [singleQuestion] = await dbconnection.query(
      "SELECT q.title, q.description, u.username FROM users u INNER JOIN questions q ON u.userid = q.userid WHERE questionid = ?",
      [questionId]
    );
    // Fetch the username and answers of the question from the database
    const [singleQuestionAnswers] = await dbconnection.query(
      "SELECT u.username, q.answer FROM users u INNER JOIN answers q ON u.userid = q.userid where 	questionid=?",
      [questionId]
    );
    // Check if the question exists
    if (singleQuestion.length === 0) {
      return res.status(404).json({ msg: "Question not found" });
    }

    // Return the question details
    return res.json({
      question: singleQuestion[0],
      answer: singleQuestionAnswers[0],
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function allanswers(req, res) {
  try {
    // Assuming the question ID is passed as a parameter in the request
    const questionId = req.params.questionId; // Ad
    const [singleQuestionAnswers] = await dbconnection.query(
      "SELECT u.username, q.answer FROM users u INNER JOIN answers q ON u.userid = q.userid where 	questionid=? ORDER BY answerid DESC ",
      [questionId]
    );
    return res.json({
      answer: singleQuestionAnswers,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
module.exports = { answer, onequstion, allanswers };
