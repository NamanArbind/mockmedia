const {comments,posts}=require("../db/models")

async function createComments(id,title,body)
{
    const comment=comments.create({
        id:id,
        title:title,
        body:body
    })
    return comment;

}
async function findAllcomments(query)
{  
    const post= await posts.findAll({
        include:posts
    })
    return post

}