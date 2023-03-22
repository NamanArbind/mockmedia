const {Router}=require("express")
const {createanonuser,
    getuserbyId,
    getuserbyUsername}=require("../../controller/users")
const routes=Router()
routes.get("/:id",async (req,res)=>{
   let user;
   if(isNaN(parseInt(req.params.id)))
   {   //when the user is searched by the name
    user=await getuserbyUsername(req.params.id)
   }
   else{
    //when the user is searched by the id
    user=await getuserbyId(req.params.id)
   }
   if(user)
   {
    res.status(200).send(user)
   }
   else
   {
    res.status(404).send({
        Error:"user is not found"
   })
   }
})
routes.post("/",async (req,res)=>{
    const user=await createanonuser()
    res.status(201).send(user)
})

module.exports={
    userRoutes:routes
}