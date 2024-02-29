const dbconnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-code");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res
      .status(401)
      .json({ msg: "pleas inter all requierd information" });
  }
  try {
    const [user] = await dbconnection.query(
      "SELECT username,userid from users where username=? or email=?",
      [username, email]
    );
    if (user.length > 0) {
      return res.status(401).json({ msg: "user is already registerd" });
    }
    if (password.length < 8) {
      return res.status(401).json({
        msg: "The passord is too short it must be at least 8 characters",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await dbconnection.query(
      "INSERT INTO users (username,firstname,lastname,email,password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashPassword]
    );
    return res.status(201).json({ msg: "The user is regeisterd" });
  } catch (error) {
    return res.status(500).json({ msg: "Something gose rongly" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .json({ msg: "pleas inter all requierd information" });
  }
  try {
    const [user] = await dbconnection.query(
      "SELECT username,userid,password from users where email=?",
      [email]
    );
    if (user.length == 0) {
      return res.status(401).json({ msg: "Create account first" });
    }
    //compare passored
    const ismach = await bcrypt.compare(password, user[0].password);
    if (!ismach) {
      return res.json({ msg: "Invalide Password" });
    } else {
      const usernam = user[0].username;
      const userid = user[0].userid;
      const token = jwt.sign({ usernam, userid }, process.env.jwt_SECRET, {
        expiresIn: "2d",
      });

      return res.status(200).json({
        msg: `Login successfuly ${user[0].username}`,
        token,
        usernam,
      });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something gose rongly" });
  }
}

async function check(req, res) {
  const username = req.users.usernam;
  const userid = req.users.userid;
  return res.status(200).json({ msg: `Welcome ${username}`, usernam, userid });
}

module.exports = { register, login, check };
