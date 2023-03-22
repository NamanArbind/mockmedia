const {users}=require("../db/models")
const {randomusername}=require("../utils/username")
async function createanonuser()
{
    const user=await users.create({
        username:randomusername()
    })
    return user
}
async function getuserbyUsername(username)
{
       return users.findOne({
        where:{
        username:username}})
}
async function getuserbyId(id)
{
    return users.findOne({
        where:{
           id: id}})
}
module.exports={
    createanonuser,
    getuserbyId,
    getuserbyUsername
}
// async function task()
// {
//     console.log(await createanonuser())
//     console.log(await createanonuser())
//     console.log(await createanonuser())
//     console.log(await createanonuser())
//     console.log(await createanonuser())
// }
// task()
//!always test your code while developing so that you dont get much errors finally when you execute your code after compeletion