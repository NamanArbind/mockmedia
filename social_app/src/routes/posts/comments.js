const {Router}=require("express")
const routes=Router()
routes.get("/",(req,res)=>{
    res.send("todo:all the comments")
    //TODO:show all the comments
})


module.exports={
    commentRoutes:routes
}
