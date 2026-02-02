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

