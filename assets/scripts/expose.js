// expose.js

// window.addEventListener('DOMContentLoaded', init);

var selection = document.getElementById('horn-select');
var images = document.getElementsByTagName("img");
var image = images[0];

selection.addEventListener('change', init);


function init() {
  // TODO
    console.log("hi");
  
    if (selection.selectedIndex == 1) {
      console.log("air horn");
      image.src = "./assets/images/air-horn.svg"
    } else if (selection.selectedIndex == 2) {
      console.log("car horn");
      image.src = "./assets/images/car-horn.svg"
    } else if (selection.selectedIndex == 3) {
      console.log("party horn");
      image.src = "./assets/images/party-horn.svg"
    } else {

    }
  };