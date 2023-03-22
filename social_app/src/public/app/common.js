// all the common javascript the site will have will reside here only
$(() => {
  $("#navbar").load("./components/navbar.html", loginifneeded);
  $("#footer").load("./components/footer.html");
  $("#content").load("./components/all-articles.html");
});

function loginifneeded() {
  window.curuser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  if (!curuser) {
    $.post("/api/users", {}, (user) => {
      if (user) {
        console.log("Registered the user as", user.username);
        window.localStorage.user = JSON.stringify(user);
        curuser = user;
        console.log(curuser);
      } else {
        console.log("No user can be assigned");
      }
    });
  } else {
    console.log("resuming session as", curuser.username);
    console.log(curuser.username);
  }
  $("#navuser").text(curuser.username);
}
