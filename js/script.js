jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
