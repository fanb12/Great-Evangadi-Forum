const dbconnection = require("../db/dbConfig");
async function answer(req, res) {
    try {
        // Extract the answer text from the request body
        const { answerText } = req.body;

        // Extract the question ID from the request parameters
        const { questionId } = req.params;
       console.log(questionId)
        // Extract the user ID from the authenticated user's session or token
        const userId = req.users.userid; // Adjust this according to your authentication setup

        // Insert the answer into the database
        await dbconnection.query(
            "INSERT INTO answers (userid, questionid, answers) VALUES (?, ?, ?)",
            [userId, questionId, answerText]
        );

        // Return success message
        return res.json({ msg: "Answer submitted successfully" });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

async function onequstion(req,res){
    try {
        // Assuming the question ID is passed as a parameter in the request
        const questionId = req.params.questionId; // Adjust this according to your route setup

        // Fetch the title and description of the question from the database
        const [questionResult] = await dbconnection.query(
            "SELECT title, discription FROM questions WHERE questionid = ?", 
            [questionId]
        );

        // Fetch the username, answers, and reactions (likes and dislikes) of the question from the database
        const [answerResults] = await dbconnection.query(`
            SELECT 
                u.username, 
                a.answers, 
                COUNT(CASE WHEN r.type = 'like' THEN 1 END) AS likes, 
                COUNT(CASE WHEN r.type = 'dislike' THEN 1 END) AS dislikes
            FROM 
                users u 
            INNER JOIN 
                answers a ON u.userid = a.userid 
            LEFT JOIN 
                reaction r ON a.answerid = r.answerid 
            WHERE 
                a.questionid = ? 
            GROUP BY 
                a.answerid`, 
            [questionId]
        );

        // Check if the question exists
        if (questionResult.length === 0) {
            return res.status(404).json({ msg: "Question not found" });
        }

        // Construct the response object
        const question = {
            title: questionResult[0].title,
            description: questionResult[0].discription,
            answers: answerResults.map(answer => ({
                username: answer.username,
                answer: answer.answers,
                likes: answer.likes || 0,
                dislikes: answer.dislikes || 0
            }))
        };

        // Return the question details with answers and reactions
        return res.json({ question });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}


async function reaction(req,res){
    const { reaction } = req.body;
    const answerId = req.params.answerId;
    const userId = req.users.userid;
    try {
        if (!userId || !answerId || !reaction) {
            return res.status(400).json({ message: "Missing required parameters" });
        }

        

        // Check if the user has already reacted to the answer
        const existingReactionQuery = `
            SELECT * FROM reaction 
            WHERE userid = ? AND answerid = ?
        `;
        const existingReaction = await dbconnection.query(existingReactionQuery, [userId, answerId]);
        if(existingReaction[0].length > 0) {
            // Update the existing reaction
            const updateReactionQuery = `
                UPDATE reaction 
                SET type = ?
                WHERE userid = ? AND answerid = ?
            `;
            await dbconnection.query(updateReactionQuery, [reaction, userId, answerId]);
            res.status(200).json({ message: "Reaction updated successfully" });
        } else {
            // Create a new reaction
            const createReactionQuery = `
                INSERT INTO Reaction (type, userid, answerid) 
                VALUES (?, ?, ?)
            `;
            await dbconnection.query(createReactionQuery, [reaction, userId, answerId]);
            res.status(200).json({ message: "New reaction created successfully" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
    

module.exports={answer,onequstion,reaction}