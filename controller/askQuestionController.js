const dbconnection = require("../db/dbConfig");
async function askquestion(req, res) {
  try {
    const { title, discription } = req.body;
    const userid = req.users.userid;

    const [questionid] = await dbconnection.query(
      "SELECT UUID() as questionid"
    );
    await dbconnection.query(
      "INSERT INTO questions (questionid,userid,title,discription,tag) VALUES (?,?,?,?,?)",
      [questionid[0].questionid, userid, title, discription, "now"]
    );
    return res.status(200).json({ msg: "Your qustion is added" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

// async function allqustions(req, res) {
//   try {
//     const {questionid}=await dbconnection.query(
//         "SELECT questionid FROM questions"
//     );
    
   
//     const [username]=await dbconnection.query("SELECT u.username, q.title FROM users u INNER JOIN questions q ON u.userid = q.userid ORDER BY q.date DESC");
//     const formattedResult = [];

//     // Loop through the results
//     username.forEach(([ username, title ]) => {
//         // If the username doesn't exist in the formatted result object, add it with an empty array for titles
//         if (!formattedResult[username]) {
//           formattedResult[username] = [];
//         }
        
//         // Push the title into the array for the corresponding username
//         formattedResult[username].push(title);
//       });
      
//       // Output the formatted result
//     return res.json({ formattedResult});
    
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
  
// }
async function allqustions(req, res) {
  try {
    const query = `
      SELECT u.username, q.title AS question, q.date
      FROM users u
      INNER JOIN questions q ON u.userid = q.userid
      ORDER BY q.date DESC;
    `;
    const [results] = await dbconnection.query(query);

    return res.json({ questions: results });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = { askquestion, allqustions};
