function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}
function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}
function pressIt() {
  $('#typing').on('keydown', funcion(key) {
    if(key.which === 71) {
    alert("You pressed 'g'!");
    }
  })
}

function submitIt() {
  $('form').on('submit', function(submit) {
  alert("Your form is goint to be submitted now");
  })
}

$(document).ready(function(){

//call functions here

});
