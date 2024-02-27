const express =require('express')
const route=express.Router()
const autentication=require("../middleware/authMiddleware")
const {askquestion,allqustions}=require('../controller/askQuestionController')
//route to qustion
route.post('/myquestions',autentication,askquestion)
route.get("/questionList",autentication,allqustions)
module.exports=route