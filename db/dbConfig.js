const mysql=require('mysql2')

const dbconnection=mysql.createPool({
    user:"aman-admin",
    database:"evangadi_forem",
    host:"localhost",
    password:"Aman@123#123",
    connectionLimit:10
})

// dbconnection.execute("select 'test' ",(err,result)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log(result)
//     }
// })

module.exports=dbconnection.promise()