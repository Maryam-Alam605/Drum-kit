// once the button is clicked
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", getClicked);
});

// what should happen when button gets clicked
function getClicked() {
  var innerHTML = this.innerText;
  playSound(innerHTML);
  animate(innerHTML);
}

// associate sounds with innerHTML
function playSound(innerHTML) {
  var audio;
  switch (innerHTML) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(key);
  }

  if (audio) {
    audio.play();
  }
}
document.addEventListener("keydown", function (event) {
  playSound(event.key.toLowerCase());
  animate(event.key.toLowerCase());
});

function animate(key) {
  var selectKey = document.querySelector("." + key);
  selectKey.classList.add("pressed");

  setTimeout(function () {
    selectKey.classList.remove("pressed");
  }, 200);
}
