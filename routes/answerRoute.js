const express =require('express')
const routes=express.Router()
const autentication=require("../middleware/authMiddleware")
const {answer,onequstion}=require('../controller/answerController')


//route to answers
routes.post("/qusetions/myansewrs/:questionId",autentication,answer)
routes.get('/questions/:questionId',autentication, onequstion);

module.exports=routes