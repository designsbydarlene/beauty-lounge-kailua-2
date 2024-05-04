// JavaScript Document
/* sidebar */
$(document)
    .ready(function () {

        $('.ui.sidebar')
            .sidebar('attach events', '.launch.button', 'slide out');
    });
/* review google */
jQuery(document).ready(function ($) {
    $("#google-reviews").googlePlaces({
        placeId: 'ChIJ-4AXfdwUAHwRqESxGhdknak' //Find placeID @: https://developers.google.com/places/place-id
            ,
        render: ['reviews'],
        min_rating: 5,
        max_rows: 5
    });
});
/* services popup */
$(function () {
    $("#emphasize").click(function () {
        $(".emphasize").modal('show');
    });
    $(".emphasize").modal({
        closable: true
    });
});

$(function () {
    $("#volumize").click(function () {
        $(".volumize").modal('show');
    });
    $(".volumize").modal({
        closable: true
    });
});

$(function () {
    $("#customize").click(function () {
        $(".customize").modal('show');
    });
    $(".customize").modal({
        closable: true
    });
});

/* contact pop-up */
$(function () {
    $("#map").click(function () {
        $(".map").modal('show');
    });
    $(".map").modal({
        closable: true
    });
});
$(function () {
    $("#email").click(function () {
        $(".email").modal('show');
    });
    $(".email").modal({
        closable: true
    });
});

/* contact message form*/
$('.ui.form.message')
    .form({
        name: {
            identifier: 'first-name',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your first name'
            }]
        },
        name: {
            identifier: 'last-name',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your last name'
            }]
        },
        email: {
            identifier: 'email-address',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your email address'
            }]
        },
        message: {
            identifier: 'message',
            rules: [{
                type: 'empty',
                prompt: 'Please enter a message'
            }]
        }
    });


/* photos dropdown menu */
$('#search-select-mobile')
    .dropdown();
$('#search-select-computer')
    .dropdown();

/* photos filter */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterPhotos");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("item btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}