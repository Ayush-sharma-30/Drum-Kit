var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// button clicked
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// recording key strokes and then playing sound
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  // we are getting a key word that is written on buttons. So, we are concatenating it with
  // another class that is defined in css which will provide shadow.
  var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   // next, since we don't want shadow permanently, thus we are removing shadow class after
   // 1 millisecond using setTimeout function.
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);
}
