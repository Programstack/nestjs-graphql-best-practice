// const userModel = require ('../models/Users')
const getUsers = async (req,res)=>{
    try {
     let users = await userModel.find
     res.status (200).send({
        message:"User Data Fetched Successfull",
        User
     })
    }catch (error){
        console.log(error)
        res.status (500).send({
            message:"Internal Server Error",
            error
        })

    }
}

const create = async (req,res)=>{
    try{
       let user = await userModel.create(req,body)
    } catch (error) {
       res.status (500).send({
        message:"Intrenal server Error",
        error
       })
    }
}


module.exports = {
    getUsers,
    create,
}