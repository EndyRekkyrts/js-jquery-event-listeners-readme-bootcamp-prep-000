function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}

function pressIt() {
  $('#typing').on('keydown', funcion(key) {
    if(key.which == 71) {
    alert("You pressed the G key!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function(submit) {
  alert("Your form is goint to be submitted now");
  })
}

$(document).ready(function(){

//call functions here

});
