// check off specific todos by clicking
// this is on ul so that NEW added li's can also be listened to
// note the second argument "li" - we're listening to the whole ul, but function only runs when li's inside the ul are clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass('completed');
});

// click on x to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    // this refers to the first this parent (not the same this)
    $(this).remove();
  });
  event.stopPropagation();
});

// create new todo
$("input[type='text']").keypress(function(event){
  // check if user clicked enter
  if (event.which === 13) {
      // extract value
      var newtd = $("input").val();
      // add to todolist as html
      $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newtd + "</li>");
      // clear input
      $(this).val("");
  }
});

$(".fa-plus").click(function(){
  // select input and fade it out
  $("input[type='text']").fadeToggle();

});

$('#delete').click(function(){
  $('li').fadeOut(500, function(){
    // this refers to the first this parent (not the same this)
    $(this).remove();
  });
});

$('#check').click(function(){
  $('li').toggleClass('completed');
});

$('#hide').click(function(){
  $("ul").slideToggle();
});
