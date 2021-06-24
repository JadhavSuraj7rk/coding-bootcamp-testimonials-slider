// Variables
const next = document.querySelector(".next-⏭️");
const prev = document.querySelector(".prev-⏮️");
const slides = document.querySelectorAll(".slide");
let CurrentSlide = 0;  //variable use to monitor which slide(number) display on screen


// Initially calling this function in order to hide other slide and show only current slide on windows load
display(CurrentSlide);

// This function helps to show only current slide and hide remaining slides
function display (CurrentSlide) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[CurrentSlide].style.display = 'flex';
	
}

// Whenever user click next button this function gets trigger as function gets triggered next slide appear on the screen
function nextSlide () {
	CurrentSlide++;
    // if slide number(CurrentSlide ) greater than length of slides(2) then CurrentSlide get reset
	if (CurrentSlide > slides.length - 1) {
		CurrentSlide = 0;
	}
	display(CurrentSlide);
    console.log("next");
}

// Whenever user click next button this function gets trigger as function gets triggered previous slide appear on the screen
function prevSlide () {
	CurrentSlide--;
    // if slide number(CurrentSlide ) less than zero then CurrentSlide is equal to length of slides
	if (CurrentSlide < 0) {
		CurrentSlide = slides.length - 1;
	}
	display(CurrentSlide);
    console.log("prev");
}

// EventListener
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
