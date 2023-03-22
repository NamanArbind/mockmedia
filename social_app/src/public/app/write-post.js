let userId = $("#userId");
let curuser = JSON.parse(window.localStorage.user);
userId.val(curuser.id);

$("#createpost").submit(function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.

  var form = $(this);
  var actionUrl = form.attr("action");

  $.ajax({
    type: "POST",
    url: actionUrl,
    data: form.serialize(), // serializes the form's elements.
    success: function (data) {
       $("#inpbody").val("");
       $("#inptitle").val("");
      alert("New post created successfully");
    },
  });
});
