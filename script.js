let slideIndex = 0;
changeSlides();

function changeSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }    
  slides[slideIndex].style.display = "block";  
  setTimeout(changeSlides, 2000); 
}


function togglePortfolio(button) {
  const full_photographe = button.closest('.full-photographe');
  full_photographe.classList.toggle('expand');
}
