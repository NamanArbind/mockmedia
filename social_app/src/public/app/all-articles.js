function loadarticles()
{
  $.get("/api/posts",(posts)=>{
    for(let p of posts)
    {
      $("#post-container").append(`<div class="card m-3" style="width: 18rem; z-index: -1;">
      <div class="card-body">
        <h5 class="card-title" style="text-decoration:underline;">${p.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">By-${p.user.username}</h6>
        <p class="card-text">${p.body.substr(0,200)}..... <a href="#" >Read more</a></p>
       
        <a href="#" id="comment" class="card-link">Comment</a>
        <a href="#" class="card-link">Like</a>
      </div>`)
    }
    
  })
  buttonsgo()
}
function buttonsgo()
{
  $("#comment").click(()=>{
     console.log("clicked")
  })
}
