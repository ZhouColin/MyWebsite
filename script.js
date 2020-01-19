// Particle credit to Y Endo

function random(low, high) {
  return Math.random() * (high - low) + low;
}

// Rotating Text credit to alphardex
var words = document.querySelectorAll(".word");
words.forEach(function(word) {
  var letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(function(letter) {
    var span = document.createElement("span");
    if (letter == " ") {
      span.textContent = " ";
      span.className = "letter";
      word.append(span);
    } else {
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    }
  });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function() {
  var currentWord = words[currentWordIndex];
  var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach(function(letter, i) {
    setTimeout(function() {
      letter.className = "letter out";
    }, i * 40);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach(function(letter, i) {
    letter.className = "letter behind";
    setTimeout(function() {
      letter.className = "letter in";
    }, 500 + i * 20);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
setTimeout(rotateText, 1000);
setInterval(rotateText, 3000);

// Jump to Bio
$("#landing-container").click(function() {
  $('html,body').animate({
    scrollTop: $("#bio_container").offset().top
  },
    duration = 1000);
});


// Video Handling JS
$(".video-container").on('click', function(event) {
  var v = document.getElementById("makerportfolio");
  togglePause(v)
});

$("#togglePlayButton").on('click', function(event) {
  var v = document.getElementById("makerportfolio");
  togglePause(v)
});

var cursorOnDiv = false;

$(document).on({
  mouseenter: function() {
    cursorOnDiv = true;
  },
  mouseleave: function() {
    cursorOnDiv = false;
  },
},
  '#vid_player_card'
);

// Project Accordion
$(function() {
  $(".accordion > .accordion-item.is-active .proj_left").children(".accordion-panel").slideDown();

  $(".accordion > .accordion-item > .proj_left").click(function() {
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});

//contact_buttons
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});
