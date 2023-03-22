function loadmyarticles() {
  let curuser = JSON.parse(window.localStorage.user);
  $.get("/api/posts", (posts) => {
    for (let p of posts) {
      if (curuser.id == p.user.id) {
        $("#mypost_container")
          .append(`<div class="card m-3" style="width: 18rem; z-index: -1;">
               <div class="card-body">
                 <h5 class="card-title">${p.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${
                   p.user.username
                 }</h6>
                 <p class="card-text">${p.body.substr(
                   0,
                   200
                 )}..... <a href="#" >Read more</a></p>
               
                 <a href="#" class="card-link">Comment</a>
                 <a href="#" class="card-link">Like</a>
               </div>`);
      }
    }
  });
}
