const tra = document.querySelector(".anime");
let speed = 0.6;        
let pos = 0;


const cards = [...tra.children];
cards.forEach(card => {
  tra.appendChild(card.cloneNode(true));
});

const singleSetWidth = tra.scrollWidth / 2;

function animate() {
  pos -= speed;

  // reset without user noticing
  if (Math.abs(pos) >= singleSetWidth) {
    pos = 0;
  }

  tra.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();



const track = document.getElementById('sliderTrack');
const originalCards = Array.from(track.children);
const cardCount = originalCards.length;

console.log(track)

if (cardCount > 3) {
   
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let currentTranslate = 0;
    const speed = 1; 
    
    function moveSlider() {
        currentTranslate -= speed;
        
        const resetPoint = (350 + 30) * cardCount;
        
        if (Math.abs(currentTranslate) >= resetPoint) {
            currentTranslate = 0;
        }
        
        track.style.transform = `translateX(${currentTranslate}px)`;
        requestAnimationFrame(moveSlider);
    }

   
    moveSlider();

    
    let isPaused = false;
    track.addEventListener('mouseenter', () => {  });
} else {
    
    track.style.justifyContent = "center";
    track.style.width = "100%";
}




document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-item');
    let currentReview = 0;

    function nextReview() {

        reviews[currentReview].classList.remove('active');


        currentReview = (currentReview + 1) % reviews.length;


        reviews[currentReview].classList.add('active');
    }


    reviews[0].classList.add('active');


    setInterval(nextReview, 6000);
});


const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = carouselTrack.innerHTML;
carouselTrack.innerHTML += carouselItems;
