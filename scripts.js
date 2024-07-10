//nav
    document.addEventListener('DOMContentLoaded', function() {
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.navbar-collapse');

        toggler.addEventListener('click', function() {
            collapse.classList.toggle('active');
        });
    });

// card
document.addEventListener("DOMContentLoaded", function() { 
  const carousel = document.querySelector(".carousel"); 
  const arrowBtns = document.querySelectorAll(".wrapper i"); 
  const wrapper = document.querySelector(".wrapper"); 

  const firstCard = carousel.querySelector(".card"); 
  const firstCardWidth = firstCard.offsetWidth; 

  let isDragging = false, 
      startX, 
      startScrollLeft, 
      timeoutId; 

  const dragStart = (e) => {  
      isDragging = true; 
      carousel.classList.add("dragging"); 
      startX = e.pageX; 
      startScrollLeft = carousel.scrollLeft; 
  }; 

  const dragging = (e) => { 
      if (!isDragging) return; 
    
     
      const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
     
      if (newScrollLeft <= 0 || newScrollLeft >=  
          carousel.scrollWidth - carousel.offsetWidth) { 
            
          
          isDragging = false; 
          return; 
      } 
    
      carousel.scrollLeft = newScrollLeft; 
  }; 

  const dragStop = () => { 
      isDragging = false;  
      carousel.classList.remove("dragging"); 
  }; 

  const autoPlay = () => { 
    
      if (window.innerWidth < 800) return;  

      const totalCardWidth = carousel.scrollWidth; 
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
        
      if (carousel.scrollLeft >= maxScrollLeft) return; 
      timeoutId = setTimeout(() =>  
          carousel.scrollLeft += firstCardWidth, 2500); 
  }; 

  carousel.addEventListener("mousedown", dragStart); 
  carousel.addEventListener("mousemove", dragging); 
  document.addEventListener("mouseup", dragStop); 
  wrapper.addEventListener("mouseenter", () =>  
      clearTimeout(timeoutId)); 
  wrapper.addEventListener("mouseleave", autoPlay); 

 
  arrowBtns.forEach(btn => { 
      btn.addEventListener("click", () => { 
          carousel.scrollLeft += btn.id === "left" ?  
              -firstCardWidth : firstCardWidth; 
      }); 
  }); 
}); 




//for slideshow

function toggleNavbar() {
    var navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
}

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;
    setTimeout(showSlides, 3000); 
}









