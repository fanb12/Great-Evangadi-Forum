const jwt=require("jsonwebtoken")

async function autMiddleware(req,res,next){
    const tokenHeader=req.headers.authorization
    if(!tokenHeader){
        return res.status(200).json({msg:"Invalid token"})
    }
    else{
        try {
            const {usernam,userid}=jwt.verify(tokenHeader,process.env.jwt_SECRATE)
            req.users={usernam,userid}
            next()
        } catch (error) {
            return res.status(500).json({msg:"Something gose rongly"})
        }
    }
}
module.exports=autMiddleware