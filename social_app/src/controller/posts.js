const {posts,users}=require("../db/models")

async function createposts(userid,title,body)
{
    const post=await posts.create({
        title:title,
        body:body,
        userId:userid


    })
    return post

}
async function findAllposts(query)
{  
    const post= await posts.findAll({
        include:users
    })
    return post

}
// async function findmyposts()
// {   let curuser=JSON.parse(window.localStorage.user)
//     const post=await posts.findAll({
//         include:users,
//         where:{
//             user.username:curuser.username
//         }

//     })
//     return post

// }
module.exports={
    createposts,findAllposts
}
// async function task()
// {
//      console.log(await createposts(1,"this is sampletitle1 ","this is sample body1"))
//      console.log(await createposts(2,"this is sampletitle2 ","this is sample body2"))
//     const post= await showAllposts()
//     for(let p of post)
//     {
//         console.log(`${p.body}\n${p.title}\n${p.user.username}`)

//     }
// }
// task()
