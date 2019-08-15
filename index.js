var buttonArray = document.querySelectorAll('.drum');

//detecting button press
buttonArray.forEach(function(element){
  element.addEventListener("click",function(){
    activateSound(this.innerHTML); // The inner HTML of the buttons
    buttonAnimation(this.innerHTML);
  });
});

//detecting key press
document.addEventListener("keydown",function(e){
  activateSound(e.key);
  buttonAnimation(e.key);

});

function activateSound(key){
  switch (key) {
    case "w":
      (new Audio('sounds/crash.mp3')).play();
      break;
    case "a":
      (new Audio('sounds/kick-bass.mp3')).play();
      break;
    case "s":
      (new Audio('sounds/snare.mp3')).play();
      break;
    case "d":
      (new Audio('sounds/tom-1.mp3')).play();
      break;
    case "j":
      (new Audio('sounds/tom-2.mp3')).play();
      break;
    case "k":
      (new Audio('sounds/tom-3.mp3')).play();
      break;
    case "l":
      (new Audio('sounds/tom-4.mp3')).play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
