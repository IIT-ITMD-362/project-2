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


function validateForm() {
  let x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
	else{
		alert("Thank you for signing up!");
	}
}