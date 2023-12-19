let isOpen = false;
function togglesidebae() {
    const sidebar = document.getElementById('sidebar');
    if (isOpen) {
        sidebar.classList.add('sidebar-closed');
        isOpen = false;
    }
    else {
        sidebar.classList.remove('sidebar-closed');
        isOpen = true;
    }
}


let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % document.querySelectorAll('.slides img').length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + document.querySelectorAll('.slides img').length) % document.querySelectorAll('.slides img').length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);


var slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 3000);
 }



 alert('You are redirecting to the about us page')
