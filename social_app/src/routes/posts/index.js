const {Router}=require("express")
const routes=Router()
const {
    findAllposts,
    createposts
}=require("../../controller/posts")
routes.get("/",async (req,res)=>{
   const posts=await findAllposts()
   res.status(200).send(posts)
})
routes.post("/",async (req,res)=>{
    const {userId,title,body}=req.body
    if((!userId) || (!title) || (!body))
    {res.status(400).send({
        Error:"Need userid,body and title to create post"
    })}
    const post=await createposts(userId,title,body)
    res.status(201).send(post)

})

module.exports={
    postRoutes:routes
}
