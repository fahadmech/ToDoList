//check off specific todos on clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none"
  //     });
  //   } else {
  //     $(this).css({
  //       color: "rgb(128, 128, 128)",
  //       textDecoration: "line-through"
  //     });
  //   }
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabbing the new todo text from the input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to the ul
    $("ul").append(
      `<li><span><i class="fas fa-trash-alt"></i></span> ${todoText} </li>`
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
