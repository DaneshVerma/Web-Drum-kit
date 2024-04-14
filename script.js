// handeling button press
document.querySelectorAll("button").forEach(element => {
  element.addEventListener("click", ()=>{
   playSound(element.innerHTML)
   buttonAnimation(element.innerHTML)
})})

// handeling keyboard press
document.addEventListener("keydown", (event)=>{
  playSound(event.key)
})



function playSound(keyname) {
  switch (keyname) {
    case "w":
      buttonAnimation(keyname)
      var crash = new Audio("sounds/crash.mp3")
      crash.play();  
      break;
    case "a":
      buttonAnimation(keyname)
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play()
      break;
    case "s":
      buttonAnimation(keyname)
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break;
    case "d":
      buttonAnimation(keyname)
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;

    case "j":
      buttonAnimation(keyname)
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break;

    case "k":
      buttonAnimation(keyname)
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break;

    case "l":
      buttonAnimation(keyname)
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
      break;
    default:
      break;
  }
}


function buttonAnimation(btn){
  var pressedButton = document.querySelector("."+btn)
  pressedButton.classList.add("pressed")
  setTimeout(()=>{
    pressedButton.classList.remove("pressed")
  }, 100)
}